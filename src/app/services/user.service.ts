import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedUser: any = null;

  loginUrl = 'https://netflix.cristiancarrino.com/user/login.php';

  httpOptions = {
    headers: new HttpHeaders({'Content-type':'application/json'})
  }

  constructor(private http: HttpClient) { }

  login(username: string, password: string, rememberMe: boolean): Observable<any>{
    return this.http.post(this.loginUrl, {
      username: username,
      password: password
    }, this.httpOptions).pipe(tap(response => {
      console.log('login: ', response);
      this.loggedUser = response;
      }),catchError(error => {
        console.log(error);
        this.loggedUser=null;
        return of(null);
      })
    );
  }
}
