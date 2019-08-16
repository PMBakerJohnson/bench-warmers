import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from './api-connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bench-warmers';

  constructor(private apiConnection: ApiConnectionService, private router: Router) {

  }
}
