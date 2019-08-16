import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  constructor(private httpClient: HttpClient) { }

  checkLogin(username: string, password: string) {
    return this.httpClient.post("http:/localhost:44314/login/", "username=" + username + "&password=" + password);
  }
}
