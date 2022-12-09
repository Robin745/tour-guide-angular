import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authentication: AuthService) {}

  //created onOnInit to call getUserData funtion when application load.
  ngOnInit(): void {
    this.getUserData();
  }
  //a variable to store user information
  userData: any;

  getUserData() {
    this.userData = this.authentication.getUser();
  }

  isAuthenticated() {
    return this.authentication.isLoggedIn;
  }
  SignOut() {
    this.authentication.signOut();
  }
}
