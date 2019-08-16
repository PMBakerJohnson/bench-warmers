import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {
  valid: boolean;

  constructor(private httpClient: HttpClient) { }

  checkLogin(username: string, password: string) {
    const params = {
      username: username,
      password: password
    };
    return this.httpClient.get<boolean>(environment.apiUrl, { params });
  }

  registerUser(username: string, password: string) {
    const params = {
      username: username,
      password: password
    };
    this.httpClient.post(environment.apiUrl, { params });
  }
}
