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

  @ViewChild('input') inputValue: any;

  movies: Movie[] =[];
  show: boolean =false;
  content: string = '';

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
    if (value === '') {
      this.inputValue.nativeElement.focus();
      throw new Error('The input is required to search');
    }
    this.movieService.searchMovie(value).subscribe(result => {
      console.log
      if( result.Response === 'False'){
        this.show = true;
        this.content = 'Movie Not Found';
      } 
      if (result.Response === 'True') { 
        this.show = false;
      } 
      if ( result.Response !== 'True' && result.Response !== 'False') {
        this.show =true;
        this.content = "Error"
      }
      this.movies = result.Search;
      this.movieService.changeMovies(this.movies);
    })
  }

  cleanInput() {
    this.inputValue.nativeElement.value = ''
  }
}
