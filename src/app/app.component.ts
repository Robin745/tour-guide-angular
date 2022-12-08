import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { AuthService } from './authentication/auth.service';
import { firebaseConfig } from './firebase.config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService) {}
  jsonData: any;
  data: any;
  ngOnInit(): void {
    initializeApp(firebaseConfig);
    this.jsonData = localStorage.getItem('user');
    this.data = JSON.parse(this.jsonData);
    console.log(this.data);
    if (this.data) {
      this.auth.isLoggedIn = true;
      this.auth.setUser(this.data);
    } else {
      this.auth.isLoggedIn = false;
    }
  }
  title = 'book-shop';
}
