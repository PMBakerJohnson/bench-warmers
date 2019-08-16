import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  constructor(private httpClient: HttpClient) { }

  getcomments(): Observable<any> {
      return this.httpClient.get("http://localhost:44314")
  }
}
