import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginInfo } from './i-login';
import { CharacterInfo } from './mock-character';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {
  valid: boolean;
  errorData: {};

  constructor(private httpClient: HttpClient) { }

  login(userLogin: LoginInfo) {

    return this.httpClient.post<any>(environment.apiUrl + 'login',
    { username: userLogin.username, upassword: userLogin.password })
    .pipe(map(user => {
      if (user) {
        localStorage.setItem('currentUser', userLogin.username);
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
  }

  registerUser(userLogin: LoginInfo) {
    return this.httpClient.post(environment.apiUrl + '/register', { username: userLogin.username, upassword: userLogin.password });
  }

  getCharacterList() {
    return this.httpClient.get<CharacterInfo[]>(environment.apiUrl + '/api/Characters/' + localStorage.getItem('currentUser'))
  }

  createCharacter(characterInfo) {
    return this.httpClient.post(environment.apiUrl + '/api/characters', { fullname: characterInfo.name, classname: characterInfo.password/*,
    placeholder: characterInfo.placeholder, placeholder2: characterInfo.placeholder2 */});
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
