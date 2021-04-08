import { Component, OnInit } from '@angular/core';
import { FilmServiceService } from 'src/app/services/film-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  films: any;

  constructor(private filmService: FilmServiceService) { }

  ngOnInit(): void {
    // prendiamo il contenuto
    this.getFilms();
  }

  getFilms(): void{
    this.filmService.getFilms().subscribe(response => {
      if(response != null){
        this.films=response;
        console.log(this.films);
        console.log("Films: " + this.films);
      } else {
        alert('Contenuto vuoto');
      }
    });
  }

}
