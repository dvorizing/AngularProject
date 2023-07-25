import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Category from 'src/models/Category';
import Layer from 'src/models/Layer';
import Recipe from 'src/models/Recipe';
import CategoryService from 'src/services/category.service';
import RecipeService from 'src/services/recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {
  arrCategory: Category[];
  myRecipe: Recipe = new Recipe(0, "", 0, 0, 0, new Date(1, 1, 2000), [new Layer("", [])], [], 0, "18361.jpg", false);
  constructor(public act: ActivatedRoute, public recipeSer: RecipeService, public catSer: CategoryService) {
    this.act.params.subscribe(s => {
      this.recipeSer.getById(s["id"]).subscribe(succ => this.myRecipe = succ);
    })
  }
  removeComponent(i, j) {
    this.myRecipe.Layers[i].Components.splice(j, 1);
  }
  editInstruction(i, pre) {
    this.myRecipe.Preparation[i] = pre;
  }
  addComponent(i, com) {
    this.myRecipe.Layers[i].Components.push(com);
  }
  addInstruction(inst) {
    this.myRecipe.Preparation.push(inst);
  }
  save(form) {
    this.myRecipe.AddDate = new Date(Date.now());
    this.myRecipe.UserId = JSON.parse(localStorage.getItem("user")).Id;
    this.myRecipe.IsDisplay = true;
    this.recipeSer.updateRecipe(this.myRecipe.Id,this.myRecipe).subscribe();
    form.reset();
  }
  ngOnInit(): void {
    this.catSer.GetAllCategories().subscribe(succ => { this.arrCategory = succ });
  }

}
