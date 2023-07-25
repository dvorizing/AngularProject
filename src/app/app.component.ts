import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import User from 'src/models/User';
import LoginService from 'src/services/login.service';
import UserService from 'src/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  myUser: User = new User("", "", "", "");
  sub: Subscription;
  constructor(public userSer: UserService, public loginSer: LoginService) {
    if (!JSON.parse(localStorage.getItem("user")))
      this.myUser.Name = "guest"
    else
      this.myUser = JSON.parse(localStorage.getItem("user"));
    this.sub = this.userSer.currentUser.subscribe(succ => {
      this.myUser.Name = succ.Name;
      console.log("yyy" + succ)
    }
    )
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
  }
  login() {
    this.loginSer.isLogin = true;
  }
  changeName(e) {
    console.log(e.name)
    this.myUser = e;
  }
  logout() {
    alert("האם אתה בטוח שברצונך לעזוב את אתרינו היפה והמקצועי????????????🙁🙁🙁🙁🙁🙁");
    this.userSer.saveUser(new User("guest", "", "", ""))
    localStorage.removeItem("user");
  }
  title = 'projectRecepies';
}

