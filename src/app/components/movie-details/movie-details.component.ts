import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { MovieDetails } from 'src/app/interfaces/movie-details';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieId: number = 634649;
  movie: MovieDetails = {};
  imageURL: string = `https://image.tmdb.org/t/p/`

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getMovieDetails(this.movieId).pipe(
      map((res: any) => {
        this.movie = res;
        console.log('movie info', this.movie);
      })
    ).subscribe()
  }

}
