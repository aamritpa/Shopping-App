import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import {HeaderComponent} from  './header/header.component';
import { RecipeEditComponent } from './shopping-list/recipe-edit/recipe-edit.component';
import {RecipeDetailComponent} from './recipe/recipe-detail/recipe-detail.component';
import {RecipeListComponent} from './recipe/recipe-list/recipe-list.component'
import {RecipeItemComponent} from './recipe/recipe-list/recipe-item/recipe-item.component'

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipeComponent,
    HeaderComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
