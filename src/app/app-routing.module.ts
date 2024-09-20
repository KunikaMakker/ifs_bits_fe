import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { RecipesDashboardComponent } from './components/recipes-dashboard/recipes-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  // {path: 'profile', component: ProfileComponent},
  // {path: 'recipes-dashboard', component: RecipesDashboardComponent},
  // {path: '', children: [
  //   {path: '/', component: DashboardComponent},
  //   {path: 'profile', component: ProfileComponent},
  //   {path: 'recipes-dashboard', component: RecipesDashboardComponent},
  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
