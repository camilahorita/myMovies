import { Component, ViewChild } from '@angular/core';
import { MovieboxComponent } from './moviebox/moviebox.component';
import { Router } from '@angular/router';

const url:string = 'https://api.themoviedb.org/3/discover/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&sort_by=popularity.desc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-movie-project';
  
  constructor(private router: Router) { }

  public goToPage(pageName:string):void   {
    this.router.navigate([ `${pageName}`])
  }

}
