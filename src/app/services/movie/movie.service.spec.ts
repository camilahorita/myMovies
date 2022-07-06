import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Movie } from '../../classes/movie';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  let service: MovieService;
  let httpController: HttpTestingController;
  let httpMock: HttpTestingController;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
    http = TestBed.inject(HttpClient);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should retrieve movies from API via GET', () => {
    const dummyMovies: Movie[] = [
      { "Title": "Batman Begins", "Released": "2005", "Genre": "Action", "Language": "English", "Year": "2005", "imdbID": "1", "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg", "Plot": "" },
      { "Title": "Batman v Superman: Dawn of Justice", "Released": "2005", "Genre": "Action", "Language": "English", "Year": "2016", "imdbID": "tt2975590", "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg", "Plot": "" }
    ];

    service.searchMovie("Batman").subscribe(movies => {
      expect(movies.Search.length).toBe(2);
      expect(movies.Search).toEqual(dummyMovies);
    })
    const request = httpMock.expectOne(`${service.apiURL}&s=Batman`);

    expect(request.request.method).toBe('GET');

    request.flush(dummyMovies);
  })

  it('should call the GET method with the correct endpoint', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.searchMovie('Batman');
    expect(spy).toHaveBeenCalled();

  })
  it('should retrieve a movie from API via GET with the id', () => {
    const dummyMovies: Movie[] = [
      { "Title": "Batman Begins", "Released": "2005", "Genre": "Action", "Language": "English", "Year": "2005", "imdbID": "1", "Poster": "image.jpg", "Plot": "" },
      { "Title": "Batman v Superman: Dawn of Justice", "Released": "2005", "Genre": "Action", "Language": "English", "Year": "2016", "imdbID": "2", "Poster": "image.jpg", "Plot": "" }
    ];
    const responseMovie: Movie[] = [{ "Title": "Batman Begins", "Released": "2005", "Genre": "Action", "Language": "English", "Year": "2005", "imdbID": "1", "Poster": "image.jpg", "Plot": "" }]

    service.searchMovieId("1").subscribe(movies => {
      expect(movies.Search.length).toBe(1);
      expect(movies.Search).toEqual(responseMovie);
    })
    const request = httpMock.expectOne(`${service.apiURL}&i=1`);

    expect(request.request.method).toBe('GET');

    request.flush(dummyMovies);
  })


});
