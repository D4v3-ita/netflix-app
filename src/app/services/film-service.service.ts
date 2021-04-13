import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Film } from '../models/film';
import { tap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {
  loginUrl = 'https://netflix.cristiancarrino.com/film/read.php';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  constructor(
    private http: HttpClient,
    private userService: UserService
    ) { }

  // creiamo una funzione getFilms che restituirà un Observable di array di any
  getFilms(): Observable<Film[]>{
    // gli stiamo dicendo di stampare in formato array di any ciò che si trova all'interno
    // di loginUrl (il link che lo collega direttamente alla lista di film online)

    return this.http.get<Film[]>(this.loginUrl).pipe(
      tap(response => {
        console.log(response);
      })
    );
  }

  addFilm(film: Film): Observable<Film>{
    return this.http.post<Film>('https://netflix.cristiancarrino.com/film/create.php', film, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': (this.userService.loggedUser?.token) || ''
    })
  });
  }

}
