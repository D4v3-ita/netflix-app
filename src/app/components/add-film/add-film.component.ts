import { Component, OnInit } from '@angular/core';
import { FilmServiceService } from 'src/app/services/film-service.service';
import { Film } from 'src/app/models/film';
import { Time } from '@angular/common';


@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.scss']
})
export class AddFilmComponent implements OnInit {
  film: Film = {
    actors: [],
    cover_url: '',
    created_by: 0,
    description: '',
    director: '',
    duration: {hours: 0, minutes: 0},
    genres: [],
    id: 0,
    plot: '',
    release_year: 0,
    tags: '',
    title: '',
    vote: 0,
    votes: []
  }

  constructor(private filmService: FilmServiceService) { }

  ngOnInit(): void {
  }

  addFilm(){
    return this.filmService.addFilm(this.film).subscribe(response => {

      console.log(response);
      this.film = {
        actors: [],
        cover_url: '',
        created_by: 0,
        description: '',
        director: '',
        duration: {hours: 0, minutes: 0},
        genres: [],
        id: 0,
        plot: '',
        release_year: 0,
        tags: '',
        title: '',
        vote: 0,
        votes: []
      };
    });
  }

}
