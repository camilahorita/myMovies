import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: string = ''
  private sub: any;
  movies: Movie[] = []
  movie:any;
  
  constructor(private route: ActivatedRoute, private service: MovieService) { }

  ngOnInit() {
    // this.service.searchMovieId('tt1877830').subscribe(result => {
    //   this.movie =result;
    //   console.log(result)
    // })
    const result = this.route.params.subscribe(params => {
      this.id = params['id']; 
      console.log(this.id);
      this.search(this.id);
      })
    }
    search(id:any) {
      this.service.searchMovieId(id).subscribe(result => {
        this.movie =result;
        console.log(this.movie)
      })
    }

  }