import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profilePanels: any[] = [];
  
  constructor() {
    this.profilePanels = [
      {
        text: 'User Details',
        openFunc: () => {}
      },
      {
        text: 'Preferences',
        openFunc: () => {}
      }
    ]
  }
}
