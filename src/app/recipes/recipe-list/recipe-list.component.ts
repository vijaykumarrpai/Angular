import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-202001-mozzarella-stuffed-chicken-parm-0266-portrait-pf-1583438260.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-202001-mozzarella-stuffed-chicken-parm-0266-portrait-pf-1583438260.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
