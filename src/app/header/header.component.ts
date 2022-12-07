import { Component } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private authentication: AuthService) {}
  isAuthenticated() {
    return this.authentication.isLoggedIn;
  }
  SignOut() {
    this.authentication.signOut();
  }
}
