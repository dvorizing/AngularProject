import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Layer from 'src/models/Layer';
import Recipe from 'src/models/Recipe';
import User from 'src/models/User';
import CategoryService from 'src/services/category.service';
import RecipeService from 'src/services/recipe.service';
import UserService from 'src/services/user.service';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  myRecipe: Recipe = new Recipe(0, "", 0, 0, 0, new Date(1, 1, 2000), [new Layer("", [])], [], 0, "18361.jpg", false);
  user: User = new User("", "", "", "");
  sub: Subscription;
  iconImage: string;
  constructor(public act: ActivatedRoute, public recipeSer: RecipeService, public rout: Router, public userSer: UserService, public categoryService: CategoryService) {
   
    // this.user.Id = JSON.parse(localStorage.getItem("user")).Id

  }
  edit() {
    this.rout.navigate(["edit", this.myRecipe.Id]);
  }
  ngOnInit(): void {
    this.sub = this.userSer.currentUser.subscribe(succ => {
      this.user = succ;
    }
    )
    this.act.params.subscribe(s => {
      this.recipeSer.getById(s["id"]).subscribe(succ => {
        this.myRecipe = succ
        this.categoryService.GetCategoryById(this.myRecipe.CategoryId).subscribe(succ => {
          this.iconImage = succ.Icon;
          console.log(this.iconImage)
        })
      });
    })
  
  }

}
