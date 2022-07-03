import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from './movie';

export type ApiResponse = {
  Response: string;
  Search: Movie[];
  totalResults: string;
};

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  apiURL: string = 'https://www.omdbapi.com/?apikey=bd3ee387';
  movies: Movie[] = [];

  private moviesSource = new BehaviorSubject(this.movies);
  currentMovies = this.moviesSource.asObservable();

  constructor(private httpClient: HttpClient) {}

  searchMovie(name: string) {
    return this.httpClient.get<ApiResponse>(`${this.apiURL}&s=${name}`);
  }
  searchMovieId(id:string) {
    return this.httpClient.get(`${this.apiURL}&i=${id}`);
  }

  changeMovies(movies: Movie[]) {
    this.moviesSource.next(movies)
  }
}
