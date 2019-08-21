import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ApiConnectionService } from '../api-connection.service';
import { HtmlParser } from '@angular/compiler';
import { element, template } from '@angular/core/src/render3';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { LoginInfo } from '../i-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  valid: boolean;
  error: {};
  loginError: string;

  loginForm = this.fb.group({
    username: [''],
    password: ['']
  });

  constructor(
    private apiConnection: ApiConnectionService, 
    private router: Router, 
    private fb: FormBuilder,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService
  ) {}

  ngOnInit() {
  }

  login() {
    const userInfo: {username: string, password: string} = Object.assign({}, this.loginForm.value);
      this.apiConnection.login(userInfo)
        .subscribe((data) => {
          if (this.apiConnection.isLoggedIn()) {
            this.router.navigate(['character-list']);
          } else {
            this.loginError = 'Username or Password is Incorrect.';
          }
        },
        error => this.error = error
      );
  }
}
