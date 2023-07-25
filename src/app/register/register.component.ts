import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import User from 'src/models/User';
import UserService from 'src/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myUser = new User("", "", "", "");
  constructor(public userSer: UserService, public act: ActivatedRoute, public route: Router) {
    this.act.params.subscribe(s => { this.name = s["name"]; console.log(this.name) })
    if (this.name === undefined)
      this.name = ""
    else this.myUser.Name = this.name
  }
  // @Output() newItemEvent = new EventEmitter<User>();
  name: string;
  hide = true;

  save(form) {
    console.log(form)
    this.userSer.Register(this.myUser).subscribe(succ => {
      if (typeof succ === "boolean") {
        alert("משתמש קיים");
      }
      else {
        // localStorage.setItem("user", JSON.stringify(succ)); console.log(this.myUser.Name)
        this.userSer.saveUser(succ)
        // this.newItemEvent.emit(this.myUser);

        this.route.navigate(["all-recipe"])
      }
    })


  }
  ngOnInit(): void {


  }

}
