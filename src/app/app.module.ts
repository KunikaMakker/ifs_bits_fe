import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeCouponComponent } from './components/home-coupon/home-coupon.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BestsellersComponent } from './components/bestsellers/bestsellers.component';
import { FreshComponent } from './components/fresh/fresh.component';
import { CombosComponent } from './components/combos/combos.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './footer/footer.component';
import { LoginSidebarComponent } from './components/login-sidebar/login-sidebar.component';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { CommonService } from './services/common.service';
import { UserService } from './services/user.service';
import { SharedModule } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    SidebarModule,
    ButtonModule,
    SharedModule,
    CommonModule,
    FormsModule,
  ReactiveFormsModule,
  ],
  exports: [CarouselModule, SharedModule],
  providers: [CommonService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
