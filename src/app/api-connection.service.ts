import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginInfo } from './i-login';
import { CharacterInfo } from './character-interface';
import { ClassInfo } from './class-interface';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {
  valid: boolean;
  errorData: {};

  constructor(private httpClient: HttpClient) { }

  // USER FUNCTIONS

  login(userLogin: LoginInfo) {

    return this.httpClient.post<number>(environment.apiUrl + 'login',
    { username: userLogin.username, upassword: userLogin.password })
    .pipe(map(userID => {
      if (userID) {
        localStorage.setItem('currentUser', userLogin.username);
        localStorage.setItem('currentUserId', userID.toString());
      }
    }),
    catchError(this.handleError)
    );
  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  getUsername() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.username;
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserId');
  }

  registerUser(userLogin: LoginInfo) {
    return this.httpClient.post<number>(environment.apiUrl + 'register', { username: userLogin.username, upassword: userLogin.password });
  }

  // CHARACTER FUNCTIONS

  getCharacterList() {
    return this.httpClient.get<CharacterInfo[]>(environment.apiUrl + 'api/Characters/' + localStorage.getItem('currentUserId'));
  }

  createCharacter(characterInfo: CharacterInfo) {
    return this.httpClient.post<number>(environment.apiUrl + 'api/characters', characterInfo );
  }

  // CLASS FUNCTIONS

  getClasses() {
    return this.httpClient.get<ClassInfo[]>(environment.apiUrl + 'api/classes');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
