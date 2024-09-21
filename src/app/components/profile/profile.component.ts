import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profilePanels: any[] = [];
  visiblePanelName: string = 'userDetails';
  constructor() {
    this.profilePanels = [
      {
        text: 'User Details',
        className: 'active',
        openFunc: () => {
          this.updatePanel('userDetails', 0); // Assuming this is the first panel
        }
      },
      {
        text: 'Preferences',
        className: '',
        openFunc: () => {
          this.updatePanel('preferences', 1); // Assuming this is the second panel
        }
      },
      {
        text: 'Order History',
        className: '',
        openFunc: () => {
          this.updatePanel('orderHistory', 2); // Assuming this is the third panel
        }
      },
      {
        text: 'Help',
        className: '',
        openFunc: () => {
          this.updatePanel('help', 3); // Assuming this is the fourth panel
        }
      },
      {
        text: 'Change Password',
        className: '',
        openFunc: () => {
          this.updatePanel('changePassword', 4); // Assuming this is the fifth panel
        }
      },
      {
        text: 'Logout',
        openFunc: () => {
          console.log('logout');
        }
      }
    ];    
  }

  updatePanel(panelName: string, index: number) {
    this.visiblePanelName = panelName;
    this.profilePanels.forEach((panel, i) => {
      panel.className = i === index ? 'active' : ''; // Set 'active' for the selected panel
    });
  }
}
