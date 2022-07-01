import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  apiURL: string = 'https://www.omdbapi.com/?i=tt3896198&apikey=bd3ee387';
  movies: Movie[] | undefined;

  constructor(private httpClient: HttpClient) {}

  searchMovie(name: string) {
    return this.httpClient.get<ApiResponse>(`${this.apiURL}&s=${name}`);
  }
}
