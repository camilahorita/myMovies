import { Component, EventEmitter, Input,  OnInit, Output} from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moviebox',
  templateUrl: './moviebox.component.html',
  styleUrls: ['./moviebox.component.css']
})
export class MovieboxComponent implements OnInit  {
 
  movies: Movie[] | undefined;
  constructor(private movieService: MovieService, private router: Router) {
    this.movieService.currentMovies.subscribe(newmovies => this.movies = newmovies);
   }

  public goToPage(id:string):void   {
    this.router.navigate(['/details', id]);
  }
  
  ngOnInit(): void {
    this.movieService.searchMovie('Batman').subscribe(result => {
    this.movies = result.Search;
    this.movieService.movies = result.Search;
  })
 }

  search(value:string) {
    console.log(value);
    this.movieService.searchMovie(value).subscribe(result => {
      if(result.Search === undefined) {
        throw new Error('Not found')
      }
      this.movies =result.Search;
      this.movieService.movies = result.Search;
    })
  }
  


}
