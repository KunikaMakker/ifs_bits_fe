import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';

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

  constructor(public userService: UserService) {}
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

      // Simulate bot response
      this.generateBotResponse(userMessage.content);
    }
  }

  generateBotResponse(userMessage: string) {
    const botMessage: Message = {
      sender: 'bot',
      content: `You said: "${userMessage}"`,
      timestamp: new Date(),
    };
    this.messages.push(botMessage);
  }

}
