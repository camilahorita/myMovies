import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
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
    return this.httpClient.get<ApiResponse>(`${this.apiURL}&s=${name}`).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error.error);
    }));
  }

  searchMovieId(id: string) {
    return this.httpClient.get<ApiResponse>(`${this.apiURL}&i=${id}`).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error.error);
    }));
  }

  changeMovies(movies: Movie[]) {
    this.moviesSource.next(movies)
  }

}
