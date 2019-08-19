import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginInfo } from './i-login';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {
  valid: boolean;

  constructor(private httpClient: HttpClient) { }

  checkLogin(userLogin: LoginInfo) {
    const params = {
      username: userLogin.username,
      password: userLogin.password
    };
    return this.httpClient.get<boolean>(environment.apiUrl, { params });
  }

  registerUser(userLogin: LoginInfo) {
    const params = {
      username: userLogin.username,
      password: userLogin.password
    };
    this.httpClient.post(environment.apiUrl, { params });
  }
}
