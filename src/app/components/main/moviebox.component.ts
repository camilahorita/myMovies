
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../classes/movie';
import { MovieService } from '../../service/movie.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-moviebox',
  templateUrl: './moviebox.component.html',
  styleUrls: ['./moviebox.component.css'],
})
export class MovieboxComponent implements OnInit {
  movies: Movie[] | undefined;
  subscription!: Subscription;
 

  constructor(private movieService: MovieService, private router: Router) {
    this.subscription = this.movieService.currentMovies.subscribe(newmovies => this.movies = newmovies);
  }

  ngOnInit(): void {

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}