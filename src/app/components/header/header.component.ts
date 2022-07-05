import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../classes/movie';
import { MovieService } from '../../service/movie.service';


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
    this.searchNewMovies('batman');

  }
  async search(value:string){
    this.returnPage();
    await this.searchNewMovies(value);
    this.cleanInput();
  }

  returnPage() {
    this.router.navigateByUrl('/main');
  }

  async searchNewMovies(value:string){
    this.movieService.searchMovie(value).subscribe(result => {
      this.movieService.changeMovies(result.Search);
      if( result.Response === 'False'){
        this.show = true;
        this.content = result.Error;
      } 
      if (result.Response === 'True') { 
        this.show = false;
      } 
    })
  }

  cleanInput() {
    this.inputValue.nativeElement.value = ''
  }
}
