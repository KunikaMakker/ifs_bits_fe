import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes-dashboard',
  templateUrl: './recipes-dashboard.component.html',
  styleUrl: './recipes-dashboard.component.scss'
})
export class RecipesDashboardComponent {
  recipeDashboardPanels: any[] = [];
  visiblePanelName: string = 'discoverRecipe';
  constructor() {
    this.recipeDashboardPanels = [
      {
        text: 'Discover Recipe',
        className: 'active',
        openFunc: () => {
          this.visiblePanelName = 'discoverRecipe';
          this.updatePanelClass(0); // Update the class for this panel
        }
      },
      {
        text: 'Saved Recipe',
        className: '',
        openFunc: () => {
          this.visiblePanelName = 'savedRecipe';
          this.updatePanelClass(1); // Update the class for this panel
        }
      },
      {
        text: 'Generate Recipe',
        className: '',
        openFunc: () => {
          this.visiblePanelName = 'generateRecipe';
          this.updatePanelClass(2); // Update the class for this panel
        }
      }
    ];
  }
    // Function to update panel visibility and class names
    updatePanelClass(activeIndex: number) {
      this.recipeDashboardPanels.forEach((panel, index) => {
        panel.className = index === activeIndex ? 'active' : ''; // Set 'active' for the selected panel
      });
    }
    
}
