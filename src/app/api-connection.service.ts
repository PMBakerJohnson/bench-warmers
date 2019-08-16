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
    URL: "http:/localhost:44314/login/";

    return this.httpClient.post(this.URL, "username=" + username + "&password=" + password);

  }
}
