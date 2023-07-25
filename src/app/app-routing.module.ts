import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { LoginComponent } from './login/login.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{path:"", component:AllRecipeComponent},
{path:"all-recipe", component:AllRecipeComponent},
{path:"add", component:AddRecipeComponent},
{path:"register", component:RegisterComponent},
{path:"register/:name", component:RegisterComponent},
{path:"details/:id", component:RecipeDetailsComponent},
{path:"login", component:LoginComponent},
{path:"edit/:id", component:EditRecipeComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
