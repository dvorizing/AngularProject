import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Layer from 'src/models/Layer';
import Recipe from 'src/models/Recipe';



@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.scss']
})
export class SmallRecipeComponent implements OnInit {
  @Input()
  recipe: Recipe=new Recipe(0, "", 0, 0, 0, new Date(1, 1, 2000), [new Layer("", [])], [], 0, "", false);
  
  constructor(public route: Router) { }
  ngOnInit(): void {
  }
  func() {
    console.log(this.recipe.Image)
  }
  details() {
    if (JSON.parse(localStorage.getItem("user")).Name!="guest")  
    this.route.navigate(["details", this.recipe.Id])
  }
}
