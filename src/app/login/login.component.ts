import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiConnectionService } from '../api-connection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin = new FormGroup ({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private apiConnection: ApiConnectionService) { }

  ngOnInit() {
    
  }

  login() {
    this.apiConnection.checkLogin(this.userLogin.get('username').toString(), this.userLogin.get('password').toString())
  }

}
