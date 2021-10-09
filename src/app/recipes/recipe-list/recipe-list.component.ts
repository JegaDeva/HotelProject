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
      'https://www.google.com/search?q=hotel+recipe+image&tbm=isch&chips=q:hotel+recipe,g_1:rice:ieyysWtEwc0%3D&rlz=1C1GCEU_en-GBIN886IN886&hl=en&sa=X&ved=2ahUKEwjj2vWf3b3zAhXckUsFHTUAC-UQ4lYoA3oECAEQFw'
    ),
  ];
  constructor() {}
  ngOnInit() {}
}
