import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  recipe!: Recipe;

  constructor(private route: ActivatedRoute, private recipesService: RecipesService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if(!paramMap.has('recipeId')) {
        // redirect to initial page
        return;
      }

      const recipeId  = paramMap.get('recipeId') || '';      
      this.recipe = this.recipesService.getRecipe(recipeId) as Recipe;
      
    })
  }

}
