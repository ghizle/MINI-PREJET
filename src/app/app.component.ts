import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'coffee';

  constructor (public authService: AuthService,
    private router : Router) {}
  ngOnInit () {
      let isloggedin = localStorage.getItem('isloggedIn');
      let loggedUser = localStorage.getItem('loggedUser');
    if (isloggedin!="true" || !loggedUser)
      this.router.navigate(['/login']);
    else
    this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
    

  onLogout(){
    this.authService.logout();
  }

}