import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCouponComponent } from '../components/home-coupon/home-coupon.component';
import { CategoriesComponent } from '../components/categories/categories.component';
import { BestsellersComponent } from '../components/bestsellers/bestsellers.component';
import { FreshComponent } from '../components/fresh/fresh.component';
import { CombosComponent } from '../components/combos/combos.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    HomeCouponComponent,
    CategoriesComponent,
    BestsellersComponent,
    FreshComponent,
    CombosComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    HomeCouponComponent,
    CategoriesComponent,
    BestsellersComponent,
    FreshComponent,
    CombosComponent,
    CarouselModule
  ]
})
export class SharedModule {}
