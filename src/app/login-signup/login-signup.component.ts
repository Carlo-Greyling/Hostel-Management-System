import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
  signInMessage = 'Please log in with your 12345678@student.g.nwu.ac.za email address!'

  constructor(private router: Router,
              public auth: AuthService) { }

  ngOnInit() {
  }

  LogIn(form: NgForm) {
    const value = form.value;
    if (value.username === 'admin') {
      if (value.password === 'admin') {
        this.router.navigate(['hc-home']);
      }
    }
  }
}
