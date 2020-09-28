import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://lh3.googleusercontent.com/proxy/4S8EjIMaQZxqalzLMkRQcyhBaZJeKgQtp9zeNj4rd2c7B5UW49MssvD1nW_aiwh1rpNIzT4-O3DVGCFtMLULUU4OwWOKv50UvZfw-8KWwVEPc8riCjgJ5DJGENx7cwh_QeV62QItMaZ8fekA5D_-cYANQiKd0zLN19VwiQd6qloO8l_HXLhU03D4L2nwMCHPrqsl'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://lh3.googleusercontent.com/proxy/4S8EjIMaQZxqalzLMkRQcyhBaZJeKgQtp9zeNj4rd2c7B5UW49MssvD1nW_aiwh1rpNIzT4-O3DVGCFtMLULUU4OwWOKv50UvZfw-8KWwVEPc8riCjgJ5DJGENx7cwh_QeV62QItMaZ8fekA5D_-cYANQiKd0zLN19VwiQd6qloO8l_HXLhU03D4L2nwMCHPrqsl')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
