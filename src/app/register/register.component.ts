import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiConnectionService } from '../api-connection.service';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userRegister = new FormGroup ({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private apiConnection: ApiConnectionService, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
  }

  register() {
    this.apiConnection.registerUser(this.userRegister.get('username').toString(), this.userRegister.get('password').toString());
    this.storage.set('username', this.userRegister.get('username').toString());
    }
}
