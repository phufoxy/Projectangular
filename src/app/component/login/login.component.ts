import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../share-service/user.service';
import {User} from '../../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _userService:UserService, private router:Router) { }
  users:User[];
  user:User;
  ngOnInit() {
    // this.showlogin();
  }
  init1(){
      this._userService.getUsers().subscribe((users)=>{
        console.log(users);
        this.users=users;
      },(error)=>{
        console.log(error);
      })
  }
  username:String;
  password:String;
  

  showlogin(){
    this.username="phudaica";
    this.password="vanphu";
    this._userService.login(this.username,this.password).subscribe((users)=>{
        console.log(users);
    },(error)=>{
      console.log(error);
  })
  }
  login(form:NgForm){
      this._userService.login(form.value.email,form.value.password).subscribe((users)=>{
        console.log(users);
        this.user=users;
        console.log(this.user);
        if(form.value.email === this.user[0].username && form.value.password=== this.user[0].password){
          localStorage.setItem("email",form.value.email);
          this.router.navigate(['index']);
        }
    },(error)=>{
      console.log(error);
  })
     
    
  }
}
