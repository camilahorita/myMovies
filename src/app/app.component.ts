import { Component, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { LoadingService } from './services/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-movie-project';
  loading$ = this.loader.loading$;

  constructor(private router: Router, private loader: LoadingService) { }

  public goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`])
  }

}
