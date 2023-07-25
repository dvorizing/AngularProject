import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/models/User';
import LoginService from 'src/services/login.service';
import UserService from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myUser: User = new User("", "", "", "")
  isWorngPassword: boolean = false;
  constructor(public userSer: UserService, public route: Router, public loginSer: LoginService) { }

  ngOnInit(): void {
  }
  login() {
    this.loginSer.isLogin = false;
    this.userSer.Login(new User(this.myUser.Name, "", "", this.myUser.Password)).subscribe(
      succ => {
        if (typeof succ === "boolean") {
          if (succ == true)
            this.isWorngPassword = true;
          else {

            this.route.navigate(["register", this.myUser.Name]);
          }

        }
        else {

          this.userSer.saveUser(this.myUser)
          this.route.navigate(["all-recipe"])
        }
      }
    )
  }
}

