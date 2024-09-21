import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  [key: string]: any; // Allow dynamic keys
}


@Component({
  selector: 'app-discover-recipe',
  templateUrl: './discover-recipe.component.html',
  styleUrls: ['./discover-recipe.component.scss'],
})
export class DiscoverRecipeComponent implements OnInit {
  recipes: Recipe[] = [];
  displayedRecipes: Recipe[] = []; // For holding only 5 recipes

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchRecipes();
  }

  fetchRecipes() {
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken';
    this.http.get<any>(url).subscribe(
      (response) => {
        console.log(response)
        this.recipes = response.meals;
        this.displayedRecipes = this.recipes.splice(0, 5);
      },
      (error) => {
        console.error('Error fetching recipes', error);
      }
    );
  }

  isModalOpen: boolean = false; // Modal state
  selectedRecipe: Recipe = {} as Recipe; // Selected recipe

  openModal(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.isModalOpen = true;
    this.fetchRecipeDetails(recipe.idMeal);
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedRecipe = {} as Recipe; // Clear the selected recipe
  }

  fetchRecipeDetails(idMeal: string) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    this.http.get<any>(url).subscribe(
      (response) => {
        this.selectedRecipe = response.meals[0]; // Assuming response contains the recipe details
        this.isModalOpen = true;
      },
      (error) => {
        console.error('Error fetching recipe details', error);
      }
    );
  }

  getIngredients(recipe: Recipe) {
    console.log(recipe)
    return Object.keys(recipe)
      .filter(key => key.startsWith('strIngredient') && recipe[key])
      .map(key => recipe[key]);
  }
}
