import { Component, OnInit } from '@angular/core';
import { FilmServiceService } from 'src/app/services/film-service.service';
import { Film } from 'src/app/models/film';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  films: Film[] = [];

  constructor(private filmService: FilmServiceService) { }

  ngOnInit(): void {
    // prendiamo il contenuto
    this.filmService.getFilms()
    .subscribe(response => this.films = response);
  }

  // getFilms(): void{
  //   this.filmService.getFilms().subscribe(response => {

  //     if(response != null){
  //       this.films=response;
  //       console.log(this.films);
  //       console.log("Films: " + this.films);

  //     } else {
  //       alert('Contenuto vuoto');
  //     }
  //   });
  // }

}
