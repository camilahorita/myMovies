import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-moviebox',
  templateUrl: './moviebox.component.html',
  styleUrls: ['./moviebox.component.css']
})
export class MovieboxComponent implements OnInit {

  movies: Movie[] | undefined;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.searchMovie('Batman').subscribe(result => {
      this.movies = result.Search;
    });
  }

}
