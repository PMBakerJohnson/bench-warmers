import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiConnectionService } from '../api-connection.service';
import { HtmlParser } from '@angular/compiler';
import { element, template } from '@angular/core/src/render3';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { LoginInfo } from '../i-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  valid: boolean;

  userLogin: LoginInfo = {
    username: null,
    password: null
  }

  constructor(private apiConnection: ApiConnectionService,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
  }

  login() {
      this.apiConnection.checkLogin(this.userLogin)
        .subscribe((data: boolean) => { this.valid = data; });
      if (this.valid) {
        this.isValid(this.userLogin.username);
      } else {
        window.alert('Login failed, please try again!');
      }
    }
  isValid(validUsername: string) {
    this.storage.set('username', validUsername);
  }
}
