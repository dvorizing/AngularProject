import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import Recipe from 'src/models/Recipe';

@Injectable({
  providedIn: 'root'
})
export default class RecipeService {

  constructor(public http: HttpClient) { }
  routeUrl = `${environment.baseUrl}/Recipe`;
  
  getAllRecipes() {
    console.log(`${this.routeUrl}/GetAllRecipes`)

    return this.http.get<Recipe[]>(`${this.routeUrl}/GetAllRecipes`);
    
  }
  getById(id: number = 1001) {
    return this.http.get<Recipe>(`${this.routeUrl}/getRecipeById/${id}`);
  }
  GetRecipesByCategoryId(categoryId: number = 1) {
    return this.http.get<Recipe>(`${this.routeUrl}/GetRecipesByCategoryId/${categoryId}`);

  }

  addRecipe(recipe: Recipe) {
    return this.http.post<Recipe>(`${this.routeUrl}/AddRecipe`, recipe);
  }
  updateRecipe(recipeId: number = 1001, recipe: Recipe) {
    return this.http.put<Recipe>(`${this.routeUrl}/UpdateRecipe/${recipeId}`, recipe)
  }
}
