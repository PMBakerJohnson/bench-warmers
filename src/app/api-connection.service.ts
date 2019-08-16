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
    this.httpClient.post('http:/localhost:44314/login/', 'username=' + username + '&password=' + password)
    .subscribe((data: any) => { this.valid = data.valid; });
    return this.valid;
  }

  registerUser(username: string, password: string) {
    this.httpClient.post('http:/localhost:44314/register/', 'username=' + username + '&password=' + password);
  }
}
