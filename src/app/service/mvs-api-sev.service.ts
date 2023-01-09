import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MvsApiSevService {

  isUserLoggeedIn: boolean = false;

  constructor( 
    private http:HttpClient,
    private router: Router
    ) { }

  // login
  login(userName: string, password: string): Observable<any> {
    this.isUserLoggeedIn = userName == 'admin' && password == 'admin';
    localStorage.setItem('isUserLoggedIn', this.isUserLoggeedIn ? "true" : "false");

    return of(this.isUserLoggeedIn).pipe(
      delay(1000),
    );
  }

  // logout
  logout(): void {
    this.isUserLoggeedIn = false;
    localStorage.removeItem('isUserLoggedIn');

    this.router.navigate(['/home']);

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  // https://api.themoviedb.org/3/movie/550?api_key=0264b0cdba895000a1d2f5382fe17e4f
  baseurl = "https://api.themoviedb.org/3";
  apikey = "0264b0cdba895000a1d2f5382fe17e4f";

  bannerApiData():Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`)
  }

  // trendingmovieapidata
  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  }

   // popular
   getLastestMovie(): Observable<any> {
    return this.http.get(this.baseurl+`/movie/latest?api_key=${this.apikey}`)
  }

  // popular
  getPopularMovie(): Observable<any> {
    return this.http.get(this.baseurl+`/movie/popular?api_key=${this.apikey}`)
  }

  // nowplaying
  getNowPlayingMovie(): Observable<any> {
    return this.http.get(this.baseurl+`/movie/now_playing?api_key=${this.apikey}`)
  }
  
  // topRated
  getTopRatedMovie(): Observable<any> {
    return this.http.get(this.baseurl+`/movie/top_rated?api_key=${this.apikey}`)
  }

  // upcoming
  getUpcomingMovie(): Observable<any> {
    return this.http.get(this.baseurl+`/movie/upcoming?api_key=${this.apikey}`)
  }

  // // originals
  // getOriginalsMovie(): Observable<any> {
  //   return this.http.get(this.baseurl+`discover/tv?api_key=${this.apikey}`)
  // }

  // searchmovie
  getsearchMovie(data:any): Observable<any> {
    console.log(data,'movie#');
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }

  // moviedetails
  getMovieDetails(data:any):Observable<any> {
   return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`);
  }

  getMovieVideo(data:any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`);
  }

  // getMovieCast
  getMovieCast(data:any):Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`);
  }

  //action
  fetchActionMovies():Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  //adventer
  fetchAdventureMovies():Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }

  // animation
  fetchAnimationMovies():Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  }

  // comedy
  fetchComedyMovies():Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }

  // documentary
  fetchDocumentaryMovies():Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
  }

  // Science-fiction
  fetchScienceFictionMovies():Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
  }

  // thriller
  fetchThrillerMovies():Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
  }
}
