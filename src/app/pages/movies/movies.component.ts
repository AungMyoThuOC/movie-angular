import { Component, OnInit } from '@angular/core';
import { MvsApiSevService } from 'src/app/service/mvs-api-sev.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private service: MvsApiSevService) {}

  lastestMovieResult: any = [];
  popularMovieResult : any = [];
  nowplayingMovieResult: any = [];
  topratedMovieResult: any = [];
  upcomingMovieResult: any = [];
  // originalsMovieResult: any = [];

  ngOnInit(): void {
    this.lastestData();
    this.popularData();
    this.nowplayingData();
    this.topreatedData();
    this.upcomingData();
    // this.originalsData();
  }

  lastestData() {
    this.service.getPopularMovie().subscribe((result) => {
      console.log(result, 'trendingresult#')
      this.popularMovieResult = result.results;
    });
  }

  popularData() {
    this.service.getPopularMovie().subscribe((result) => {
      console.log(result, 'trendingresult#')
      this.popularMovieResult = result.results;
    });
  }

  nowplayingData() {
    this.service.getNowPlayingMovie().subscribe((result) => {
      console.log(result, 'trendingresult#')
      this.nowplayingMovieResult = result.results;
    });
  }

  topreatedData () {
    this.service.getTopRatedMovie().subscribe((result) => {
      console.log(result, 'trendingresult#')
      this.topratedMovieResult = result.results;
    });
  }

  upcomingData() {
    this.service.getUpcomingMovie().subscribe((result) => {
      console.log(result, 'trendingresult#')
      this.upcomingMovieResult = result.results;
    });
  }

  // originalsData() {
  //   this.service.getOriginalsMovie().subscribe((result) => {
  //     console.log(result, 'trendingresult#')
  //     this.originalsMovieResult = result.results;
  //   });
  // }

}
