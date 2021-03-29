import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './components/login/login.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  // { path: 'heroes', component: HeroesComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
