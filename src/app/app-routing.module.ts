import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { RecipesDashboardComponent } from './components/recipes-dashboard/recipes-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecipeDetailComponent } from './components/recipe-details/recipes-details.component';

const routes: Routes = [
  {path: '', children: [
    {path: '', component: DashboardComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'recipes-dashboard', component: RecipesDashboardComponent},
    { path: 'recipe/:id', component: RecipeDetailComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
