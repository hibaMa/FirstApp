import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-Nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {

  user = {
    username: '',
    password: ''
  };
  constructor(public auth: AuthenticationService , private router: Router) { }

  ngOnInit() {
  }

  logIn(){
    console.log(this.user);
    this.auth.logIn(this.user).subscribe((result) => {
      console.log("logedIn successfully");
      alert("logedIn successfully");
      this.router.navigate(['/matches']);

   }, ( error) => {
     console.log("logIn error");
     alert("logIn error");

   });
  }

  logOut(){
    this.auth.logOut();
    this.router.navigate(['/']);
  }

  isLoggedIn(){
    return this.auth.isLoggedIn();
  }

}
