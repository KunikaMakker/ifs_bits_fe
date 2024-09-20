import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(private commonService: CommonService) {}

  categories: any[] = [];
  ngOnInit(): void {
    this.categories = this.commonService.getCategories();
  }
}
