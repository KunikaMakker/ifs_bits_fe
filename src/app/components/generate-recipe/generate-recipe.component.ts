import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

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
    // const payload = {
    //   message: userMessage,
    //   preferences: preferences
    // };
    const payload = {
      prompt: userMessage,
      spiceLevel: preferences.spiceLevel,
      cookLevel: preferences.cookingLevel,
      allergy: preferences.allergies,
      maxToken: 1024
    }
    this.responseLoading = true;
    // Make the POST API call

    this.http.post('http://10.100.50.249:8080/generate-text', payload).subscribe(
      response => {
        // Handle the response from the server
        console.log('API Response:', response);

        const botMessage: Message = {
          sender: 'bot',
          content: `${userMessage}`,
          timestamp: new Date(),
        };

        
        this.responseLoading = false
        this.messages.push(botMessage);
      },
      error => {
        // Handle any error response
        console.error('Error:', error);

        const botMessage: Message = {
          sender: 'bot',
          content: `You said: "${userMessage}"`,
          timestamp: new Date(),
        };
        this.messages.push(botMessage);
        this.responseLoading = false
        // this.botError = true;
      }
    );
  }

  saveRecipe() {

  }

  share(msg: string) {
    // const lastBotMessage = this.messages[this.messages.length - 1]?.content;
    const botMessage = msg;

    if (botMessage) {
      // Using the Web Share API for mobile devices
      if (navigator.share && false) {
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
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(botMessage)}`;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(botMessage)}&url=${encodeURIComponent(window.location.href)}`;

        // Open the sharing links in a new window
        // window.open(facebookUrl, '_blank');
        // Optionally uncomment this to open Twitter share too
        window.open(twitterUrl, '_blank');
      }
    }
  }
}
