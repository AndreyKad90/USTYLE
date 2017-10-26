import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {LoginForm} from "../account/login/login.form";

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  login(loginForm: LoginForm) {
    return this.http.post('/api/authentication/login', {...loginForm});
  }

}
