import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {
  loginUrl = 'https://netflix.cristiancarrino.com/film/read.php';

  httpOptions = {
    headers: new HttpHeaders({'Content-type':'application/json'})
  }

  constructor(private http: HttpClient) { }

  // getFilms(loginUrl: string, httpOptions: HttpHeaders): Observable<[]>{
  //   return this.http.get(this.loginUrl, {
  //     username: username,
  //     password: password
  //   }, this.httpOptions).pipe(tap(response => {
  //     console.log('login: ', response);
  //     this.loggedUser = response;
  //     }),catchError(error => {
  //       console.log(error);
  //       this.loggedUser=null;
  //       return of(null);
  //     })
  //   );
  // }

}
