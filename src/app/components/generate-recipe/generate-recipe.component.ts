import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Import HttpClient

interface Message {
  sender: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

@Component({
  selector: 'app-generate-recipe',
  templateUrl: './generate-recipe.component.html',
  styleUrls: ['./generate-recipe.component.scss'],
})
export class GenerateRecipeComponent implements OnInit {

  messages: Message[] = [];
  messageInput: string = '';
  cookingLevel: string = '';
  spiceLevel: string = '';
  allergies: string = '';
  showPreferencePanel: boolean = false;
  botError: boolean = false;
  responseLoading: boolean = false;

  constructor(
    public userService: UserService,
    private http: HttpClient // Inject HttpClient
  ) {}

  ngOnInit(): void {}

  sendMessage() {
    if (this.messageInput.trim()) {
      const userMessage: Message = {
        sender: 'user',
        content: this.messageInput,
        timestamp: new Date(),
      };
      this.messages.push(userMessage);
      this.messageInput = '';

      const preferences = {
        cookingLevel: this.cookingLevel,
        spiceLevel: this.spiceLevel,
        allergies: this.allergies
      };
      // Simulate bot response
      this.generateBotResponse(userMessage.content, preferences);
    }
  }

  generateBotResponse(userMessage: string, preferences: any) {
    const payload = {
      prompt: userMessage,
      spiceLevel: preferences.spiceLevel === "" ? null : preferences.spiceLevel,
      cookLevel: preferences.cookingLevel === "" ? null : preferences.cookingLevel,
      allergy: preferences.allergies === "" ? null : preferences.allergies,
      maxToken: 1024
    };
  
    this.responseLoading = true;
  
    // Create HttpHeaders with the apiKey
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });
  
    // Make the POST API call
    this.http.post('http://10.100.50.249:8080/generate-text', payload).subscribe(
      (response:any) => {
        // Handle the response from the server
        console.log('API Response:', response);
  
        const botMessage: Message = {
          sender: 'bot',
          content: `${response.message}`, // You may want to adjust this based on the response structure
          timestamp: new Date(),
        };
  
        this.responseLoading = false;
        this.messages.push(botMessage);
      },
      error => {
        // Handle any error response
        console.error('Error:', error.error.text);
  
        const botMessage: Message = {
          sender: 'bot',
          content: `${error.error.text}`,
          timestamp: new Date(),
        };
        this.messages.push(botMessage);
        this.responseLoading = false;
        // this.botError = true;
      }
    );
  }  

  saveRecipe() {

  }

  share(msg: string, socialMedia: number = 0) {
    // const lastBotMessage = this.messages[this.messages.length - 1]?.content;
    const botMessage = msg;

    if (botMessage) {
      // Using the Web Share API for mobile devices
      if (navigator.share && socialMedia == 0) {
        navigator.share({
          title: 'Recipe Bot Response',
          text: botMessage,
          url: window.location.href // Optional: share current page URL
        }).then(() => {
          console.log('Share successful!');
        }).catch((error) => {
          console.error('Error sharing:', error);
        });
      } else {
        // Fallback: Create share links for social media
        if(socialMedia == 1) {
          const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(botMessage)}`;
          window.open(facebookUrl, '_blank');
        }
        else if(socialMedia == 2) {
          const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(botMessage)}&url=${encodeURIComponent(window.location.href)}`;
          window.open(twitterUrl, '_blank');
        }
        


        // Open the sharing links in a new window
        // window.open(facebookUrl, '_blank');
        // Optionally uncomment this to open Twitter share too
        
      }
    }
  }
}
