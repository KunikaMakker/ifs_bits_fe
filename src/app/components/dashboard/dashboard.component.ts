import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true, // Ensure this is set if you are using standalone
  imports: [SharedModule, CommonModule], // Import the SharedModule here
})
export class DashboardComponent implements OnInit{
  cart: any;
  bestsellersHeading = 'Bestsellers';
  bestsellersSubHeading: string = 'Most popular products near you!';
  bestsellersData: any[] = [];

  combosHeading: string = 'Combos for you';
  combosSubHeading: string = 'Savour the savings!';
  combosData: any[] = [];

  lowersHeading = 'Rs 199 or lower!';
  lowersSubHeading = '';
  lowersData: any[] = [];

  breakfastHeading: string = 'Breakfast specials';
  breakfastSubHeading = '';
  breakfastData: any[] = [];

  bonelessHeading = 'Delicious boneless cuts';
  bonelessSubHeading = '';
  bonelessData: any[] = [];

  topRatedHeading: string = 'Top Rated';
  topRatedSubHeading = 'by meat-lovers like you!';
  topRatedData: any[] = [];

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.cart = this.commonService.getCart();
    this.bestsellersData = this.commonService.getBestsellers();
    this.combosData = this.commonService.getCombos();
    this.lowersData = this.commonService.getLowers();
    this.breakfastData = this.commonService.getBreakfast();
    this.bonelessData = this.commonService.getBoneless();
    this.topRatedData = this.commonService.getTopRated();
  }
}
