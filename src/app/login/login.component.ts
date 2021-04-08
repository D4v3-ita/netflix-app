import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.userService.login(this.username, this.password, this.rememberMe)
    .subscribe(response => {
      if(response != null){
        // naviga verso la dashboard
      } else {
        alert('Login fallito!');
      }
    });
  }

}
