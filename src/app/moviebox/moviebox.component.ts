import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-moviebox',
  templateUrl: './moviebox.component.html',
  styleUrls: ['./moviebox.component.css']
})
export class MovieboxComponent implements OnInit  {
  static search() {
    throw new Error('Method not implemented.');
  }

  movies: Movie[] | undefined;

  constructor(private movieService: MovieService) { }

  @Input() valueName: string = '';

  ngOnInit(): void {
    this.movieService.searchMovie(this.valueName).subscribe(result => {
      this.movies = result.Search;
    });
  }

  search(value:string) {
    console.log(value);
    this.movieService.searchMovie(value).subscribe(result => {
      this.movies =result.Search;
    })
  }


}
