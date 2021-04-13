import { Time } from '@angular/common';

export interface Film {
  actors: any[];
  cover_url: string;
  created_by: number;
  description: string;
  director: string;
  duration: Time;
  genres: any[];
  id: number;
  plot: string;
  release_year: number;
  tags: string;
  title: string;
  vote: number;
  votes: any[];
}
