import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import User from 'src/models/User';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class UserService {

  currentUser=new Subject<User>();
  constructor(public http: HttpClient) { }
  routeUrl = `${environment.baseUrl}/User`;
  
  getAllUsers() {
    return this.http.get<User[]>(`${this.routeUrl}/GetAllUsers`);
  }
  getById(id: number = 1001) {
    return this.http.get<User>(`${this.routeUrl}/GetUserById/${id}`);
  }
  Login(u:User) {
    return this.http.post<User|boolean>(`${this.routeUrl}/Login`,u);
  } 
  Register(u:User) {
    return this.http.post<User|boolean>(`${this.routeUrl}/Register`,u);
  }
  saveUser(user:User){
  this.currentUser.next(user);
  localStorage.setItem("user",JSON.stringify(user));
  }
}
