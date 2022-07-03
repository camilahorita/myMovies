import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  movies: Movie[] =[]
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  public search(value:string){
    this.movieService.searchMovie(value).subscribe(result => {
    this.movies =result.Search;
    this.movieService.changeMovies(this.movies);
  })
  }
}
