import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { Movie } from '../classes/movie';

export type ApiResponse = {
  Response: string;
  Search: Movie[];
  Error: string;
};

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  apiURL: string = 'https://www.omdbapi.com/?apikey=bd3ee387';
  movies: Movie[] = [];

  private moviesSource = new BehaviorSubject(this.movies);
  currentMovies = this.moviesSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  searchMovie(name: string) {
    return this.httpClient.get<ApiResponse>(`${this.apiURL}&s=${name}`).pipe(catchError((this.handleError)));
  };

  searchMovieId(id: string) {
    return this.httpClient.get<ApiResponse>(`${this.apiURL}&i=${id}`).pipe(catchError((this.handleError)));
  };

  changeMovies(movies: Movie[]) {
    this.moviesSource.next(movies)
  };

  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
        return errorMessage;
    });
  };
};
