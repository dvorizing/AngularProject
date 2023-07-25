import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import Category from 'src/models/Category';


@Injectable({
  providedIn: 'root'
})
export default class CategoryService {

  constructor(public http: HttpClient) { }
  routeUrl = `${environment.baseUrl}/category`;
  
  GetAllCategories() {
    console.log(`${this.routeUrl}/GetAllCategories`)

    return this.http.get<Category[]>(`${this.routeUrl}/GetAllCategories`);
    
  }
  GetCategoryById(id: number = 1001) {
    return this.http.get<Category>(`${this.routeUrl}/GetCategoryById/${id}`);
  }
}
