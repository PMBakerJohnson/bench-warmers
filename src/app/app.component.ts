import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from './api-connection.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bench-warmers';
  username = localStorage.getItem('currentUser');
  loaded: string;

  constructor(private apiConnection: ApiConnectionService, private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.username = localStorage.getItem('currentUser');
        this.loaded = router.url;
      }
    });
  }

  logout() {
    this.apiConnection.logout();
    this.router.navigate(['../index']);
  }

  listLoaded() {
    if (this.router.url === '/character-list') {
      return true;
    }
    return false;
  }

}
