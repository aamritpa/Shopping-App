import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[]=[
    new Recipe('Test','Simply atest','https://i.ndtvimg.com/i/2015-10/urlai-roast_625x350_71444723419.jpg'),
    new Recipe('Test','Simply atest','https://i.ndtvimg.com/i/2015-10/urlai-roast_625x350_71444723419.jpg'),
    new Recipe('Test','Simply atest','https://i.ndtvimg.com/i/2015-10/urlai-roast_625x350_71444723419.jpg'),
    new Recipe('Test','Simply atest','https://i.ndtvimg.com/i/2015-10/urlai-roast_625x350_71444723419.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
