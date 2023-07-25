import { Component, Input, OnInit } from '@angular/core';
import Category from 'src/models/Category';
import Layer from 'src/models/Layer';
import Recipe from 'src/models/Recipe';
import CategoryService from 'src/services/category.service';
import RecipeService from 'src/services/recipe.service';


@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.scss']
})
export class AllRecipeComponent implements OnInit {
  arrRecipes: Recipe[] = [];
  arrTemp: Recipe[] = [];
  flagFilter: boolean = false;
  flagDisplayFilter: boolean = false;

  myRecipe: Recipe = new Recipe(0, "", 0, 0, 0, new Date(1, 1, 2000), [new Layer("", [])], [], 0, "assets/images/18361.jpg", false);
  arrCategory: Category[] = [];
  constructor(public recipeSer: RecipeService, public catSer: CategoryService) {
    this.recipeSer.getAllRecipes().subscribe(r => { this.arrRecipes = r; });

  }
  ngOnInit(): void {
    this.catSer.GetAllCategories().subscribe(succ => { this.arrCategory = succ });

  }
  IsFilter() {

    this.flagDisplayFilter = !this.flagDisplayFilter;
  }
  filterRecipes(form) {
    this.flagFilter = true;
    console.log(this.flagFilter)
    console.log(this.arrRecipes)
    console.log(this.arrTemp)
    console.log(this.myRecipe.Level)

    this.arrTemp = this.arrRecipes.filter(x => x.Name.includes(this.myRecipe.Name));
    if (this.myRecipe.CategoryId != 0)
      this.arrTemp = this.arrTemp.filter(x => x.CategoryId == this.myRecipe.CategoryId);
    if (this.myRecipe.Level)
      this.arrTemp = this.arrTemp.filter(x => x.Level == this.myRecipe.Level);
    if (this.myRecipe.PreparationTimeInMinute != 0)
      this.arrTemp = this.arrTemp.filter(x => x.PreparationTimeInMinute == this.myRecipe.PreparationTimeInMinute);

  }
  clear(form) {
    form.reset();

    this.flagFilter = false;
  }
}

