import {Component, OnInit} from '@angular/core';
import {LoginForm} from "./login.form";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'us-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: LoginForm = {
    login: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.loginForm).subscribe(res => {
      console.log(res.json());
    }, (err) => {
      console.log(err.json());
    });
  }

}
