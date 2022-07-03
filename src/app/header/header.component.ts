import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('input') inputName: any;


  movies: Movie[] =[]

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {

  }

  async search(value:string){
    await this.returnPage();
    await this.searchNewMovies(value);
    this.cleanInput();
  }

  async returnPage() {
    this.router.navigateByUrl('/main');
  }

  async searchNewMovies(value:string){
    this.movieService.searchMovie(value).subscribe(result => {
      this.movies =result.Search;
      this.movieService.changeMovies(this.movies);
    })
  }

  cleanInput() {
    this.inputName.nativeElement.value = ''
  }
}
