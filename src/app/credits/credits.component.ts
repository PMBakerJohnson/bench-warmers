import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-credits',
	templateUrl: './credits.component.html',
	styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {

	constructor(
		private router: Router
	) { }

	ngOnInit() {
	}

	devData: object[] = [
		{
			devName: "Peyton Baker-Johnson",
			links: [
				{ url: "https://github.com/PMBakerJohnson", name: "Github" },
				{ url: "https://www.linkedin.com/in/peyton-baker-johnson-1bb03417b/", name: "LinkedIn" }
			], description: "I'm a cool guy who likes to help other people and also make dumb jokes. MOSTLY the dumb jokes. It's not that I don't really like to help people, but rather that I'm just *very* dedicated to dumb jokes."
		}
	]

}
