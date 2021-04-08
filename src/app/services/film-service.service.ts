import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {
  loginUrl = 'https://netflix.cristiancarrino.com/film/read.php';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  constructor(private http: HttpClient) { }

  // creiamo una funzione getFilms che restituirà un Observable di array di any
  getFilms(): Observable<any[]>{
    // gli stiamo dicendo di stampare in formato array di any ciò che si trova all'interno
    // di loginUrl (il link che lo collega direttamente alla lista di film online)
    return this.http.get<any[]>(this.loginUrl, this.httpOptions);
  }

}
