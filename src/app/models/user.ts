export interface User {
  id: number;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  birthdate: Date;
  favorite_films: string;
  favorite_actors: string;
  favorite_genres: string;
  token: string;
  last_login: Date;
}
