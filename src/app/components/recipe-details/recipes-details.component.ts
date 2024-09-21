import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  [key: string]: string | undefined; // Allow dynamic keys
}

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | null = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getRecipeDetail();
  }

  getRecipeDetail() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      this.http.get<any>(url).subscribe(
        (response) => {
          this.recipe = response.meals[0];
        },
        (error) => {
          console.error('Error fetching recipe details', error);
        }
      );
    }
  }

  getIngredients(): string[] {
    const ingredients = [];
    for (let i = 1; i <= 5; i++) { // Adjust according to how many ingredients you have
      const ingredient = this.recipe && this.recipe[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }
    return ingredients;
  }
  
}
