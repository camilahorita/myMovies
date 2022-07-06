import { Component, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-movie-project';

  constructor(private router: Router) { }

  public goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`])
  }

}
