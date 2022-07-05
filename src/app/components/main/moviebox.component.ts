
import { Component, EventEmitter, Input,  OnInit, Output} from '@angular/core';
import { Movie } from '../../classes/movie';
import { MovieService } from '../../service/movie.service';
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

  ngOnInit(): void {
 
 }

}
