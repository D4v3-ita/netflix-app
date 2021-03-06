import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { LocalStorageService } from 'ngx-localstorage';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedUser: User|null = null;

  loginUrl = 'https://netflix.cristiancarrino.com/user/login.php';

  httpOptions = {
    headers: new HttpHeaders({'Content-type':'application/json'})
  }

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
    ) { }

  login(username: string, password: string, rememberMe: boolean): Observable<User|null>{
    return this.http.post<User|null>(this.loginUrl, {
      username: username,
      password: password
    }, this.httpOptions).pipe(tap(response => {

        console.log('login: ', response);
        this.loggedUser = response;

        if(rememberMe){
          this.localStorage.set('loggedUser', response);
        }


      }),catchError(error => {
        console.log(error);
        this.loggedUser=null;

        if(rememberMe){
          this.localStorage.set('loggedUser', null);
        }
        return of(null);
      })
    );
  }

  getLoggedUser(): User|null{
    this.loggedUser = this.localStorage.get('loggedUser');
    return this.loggedUser;
  }

  logout(){
    this.localStorage.remove('loggedUser');
    this.loggedUser = null;
  }
}
