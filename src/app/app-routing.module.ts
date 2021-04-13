import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FilmListComponent } from './film-list/film-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddFilmComponent } from './components/add-film/add-film.component';
import { AddActorComponent } from './components/add-actor/add-actor.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'film-list', component: FilmListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-film', component: AddFilmComponent },
  { path: 'add-actor', component: AddActorComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
