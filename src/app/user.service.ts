import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { LoginInfo } from './i-login';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  username: string;
  password: string;
  userID: number;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {}

  postLogin(loginInfo: LoginInfo): Observable<LoginInfo> {
    return of(loginInfo);
  }

  getUsername() {
    return this.storage['username'];
  }
}
