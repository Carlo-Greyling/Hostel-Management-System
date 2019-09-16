import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
  signInMessage = 'Please Log In'

  constructor() { }

  ngOnInit() {
  }

  LogIn(form: NgForm) {
    const value = form.value;
    if (value.username === 'admin') {
      if (value.password === 'admin') {
        // this.router.navigate(['homeComponent']);
      }
    }
  }
}
