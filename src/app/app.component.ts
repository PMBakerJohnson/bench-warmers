import { Component } from '@angular/core';
import { ApiConnectionService } from './api-connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bench-warmers';

  constructor(private apiConnection: ApiConnectionService) {

  }
}
