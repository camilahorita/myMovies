import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../../classes/movie';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: string = ''
  movies: Movie[] = []
  movie:any ={Title:"New title",Released:"",Genre:"",Language:"", Year:"",imdbID:"1",Poster:"",Plot:""};
  subscription!: Subscription; 
  
  constructor(private route: ActivatedRoute, private service: MovieService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.id = params['id']; 
      console.log(this.id);
      this.search(this.id);
      })
    }
  search(id:any) {
      this.service.searchMovieId(id).subscribe(result => {
        this.movie =result;
      })
    }
  ngOnDestroy() {
      this.subscription.unsubscribe();
    } 
}