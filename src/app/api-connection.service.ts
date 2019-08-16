import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
    this.httpClient.get<boolean>('http:/localhost:44314/api/values/', { params })
    .subscribe((data: any) => { this.valid = data.valid; });
    return this.valid;
  }

  registerUser(username: string, password: string) {
    this.httpClient.post('http:/localhost:44314/register/', 'username=' + username + '&password=' + password);
  }
}
