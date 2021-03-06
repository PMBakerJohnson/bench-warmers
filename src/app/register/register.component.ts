import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ApiConnectionService } from '../api-connection.service';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userRegister = this.fb.group({
    username: [''],
    password: ['']
  })

  constructor(private apiConnection: ApiConnectionService, private router: Router, private fb: FormBuilder,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
  }

  register() {
    const userInfo: {username: string, password: string} = Object.assign({}, this.userRegister.value);

    this.apiConnection.registerUser(userInfo).subscribe(data => {
      if ( data === -1) {
        window.alert('That username is taken, please try again!');
      } else if (data === 0) {
        window.alert('There was an error, please try again!');
      } else {
        localStorage.setItem('currentUser', userInfo.username);
        localStorage.setItem('currentUserId', data.toString());
        this.router.navigate(['createCharacter']);
      }
    });
  }
}
