// import { Component, EventEmitter, Input,  OnInit, Output} from '@angular/core';
// import { Movie } from '../../classes/movie';
// import { MovieService } from '../../service/movie.service';
// import { Router } from '@angular/router';
// import { Subscription } from 'rxjs';

// @Component({
//   selector: 'app-moviebox',
//   templateUrl: './moviebox.component.html',
//   styleUrls: ['./moviebox.component.css']
// })
// export class MovieboxComponent implements OnInit  {

//   subscription!: Subscription; 
//   movies: Movie[] =[];
//   newmovie: string = 'Batman';

//   constructor(private movieService: MovieService, private router: Router) {
   
//    }

//   public goToPage(id:string){
//     this.router.navigate(['/details', id]);
//   }
  
//   ngOnInit(): void {
//     this.movieService.currentMovies.subscribe(newmovies => this.movies = newmovies);
//   }
//   search(value:string) {
//     this.subscription = this.movieService.searchMovie(value).subscribe(result => {
//       this.movies =result.Search;
//       this.movieService.movies = result.Search;
//     })
//   }
//   ngOnDestroy() {
//     this.subscription.unsubscribe();
//   }

// }

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
