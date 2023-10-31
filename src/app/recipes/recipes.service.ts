import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Idli',
      imageURL: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/idli-recipe-4.jpg',
      ingredients: ['Rice', 'Urad dal', 'Salt', 'Water']
    },
    {
      id: 'r2',
      title: 'Chicken Curry',
      imageURL: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/chicken-curry-recipe-500x500.jpg',
      ingredients: ['Chicken', 'Spices', 'Ghee', 'Water']
    }
  ]

  constructor() { }

  getRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => recipe.id === recipeId)};
  }
}
