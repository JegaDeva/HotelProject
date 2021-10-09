import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: 'recipe-list.component.html',
  styleUrls: ['recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a Test',
      'https://media.istockphoto.com/photos/chicken-lollipop-on-a-white-platter-garnished-with-scallion-picture-id1269099250?s=170x170'
    ),
  ];
  constructor() {}
  ngOnInit() {}
}
