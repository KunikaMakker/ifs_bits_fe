import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCouponComponent } from '../components/home-coupon/home-coupon.component';
import { CategoriesComponent } from '../components/categories/categories.component';
import { BestsellersComponent } from '../components/bestsellers/bestsellers.component';
import { FreshComponent } from '../components/fresh/fresh.component';
import { CombosComponent } from '../components/combos/combos.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { WorkInProgressComponent } from '../components/workinProgress/work-in-progress.component';
import { GenerateRecipeComponent } from '../components/generate-recipe/generate-recipe.component';
import { RecipesDashboardComponent } from '../components/recipes-dashboard/recipes-dashboard.component';
import { FormsModule } from '@angular/forms';
import { RecipeDetailComponent } from '../components/recipe-details/recipes-details.component';
import { DiscoverRecipeComponent } from '../components/discover-recipe/discover-recipe.component';
import { ProfileComponent } from '../components/profile/profile.component';

@NgModule({
  declarations: [
    HomeCouponComponent,
    CategoriesComponent,
    BestsellersComponent,
    FreshComponent,
    CombosComponent,
    SidebarComponent,
    UserDetailsComponent,
    WorkInProgressComponent,
    GenerateRecipeComponent,
    RecipesDashboardComponent,
    RecipeDetailComponent,
    DiscoverRecipeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    FormsModule,
  ],
  exports: [
    HomeCouponComponent,
    CategoriesComponent,
    BestsellersComponent,
    FreshComponent,
    CombosComponent,
    CarouselModule,
    SidebarComponent,
    UserDetailsComponent,
    WorkInProgressComponent,
    GenerateRecipeComponent,
    RecipesDashboardComponent,
    RecipeDetailComponent,
    DiscoverRecipeComponent,
    ProfileComponent
  ]
})
export class SharedModule {}
