import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../../classes/movie';
import { MovieService } from '../../services/movie/movie.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('input') inputValue: any;

  movies: Movie[] = [];
  show: boolean = false;
  content: string = '';
  subscription!: Subscription;

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.searchNewMovies('batman');
  }
  
  async search(value: string) {
    this.returnPage();
    await this.searchNewMovies(value);
    this.cleanInput();
  }

  returnPage() {
    this.router.navigateByUrl('/main');
  }

  async searchNewMovies(value: string) {
    if (value === '') {
      this.show = true;
      this.content = "The input is required"
      throw new Error("The input is required");
    }
    this.subscription = this.movieService.searchMovie(value).subscribe(result => {
      this.movieService.changeMovies(result.Search);
      if (result.Response === 'False') {
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
    return(this.inputValue.nativeElement.value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
