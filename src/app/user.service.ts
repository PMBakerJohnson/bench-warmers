import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  username: string;
  password: string;
  userID: number;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {}

  getUsername() {
    return this.storage['username'];
  }
}
