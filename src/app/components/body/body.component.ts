import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/classes/movie';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  movies: Movie[] | undefined;
  subscription!: Subscription;
 

  constructor(private movieService: MovieService, private router: Router) {
    this.subscription = this.movieService.currentMovies.subscribe(newmovies => this.movies = newmovies);
  }

  ngOnInit(): void {

  }
  ngOnDestroy() {
    if(this.subscription){
    this.subscription.unsubscribe();
    }
  }
}
