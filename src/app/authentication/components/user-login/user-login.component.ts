import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from '../../login-form';
import { AuthService } from '../../auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import {
  getAuth,
  setPersistence,
  signInWithRedirect,
  inMemoryPersistence,
  GoogleAuthProvider,
} from 'firebase/auth';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  constructor(
    private router: Router,
    private auth: AuthService,
    private angularFire: AngularFireAuth
  ) {}

  form: LoginForm = {
    email: '',
    password: '',
  };

  toRegister() {
    this.router.navigateByUrl('/register');
  }
  onSubmit() {
    this.auth.login(this.form);
  }
  isLoading() {
    return this.auth.isLoading;
  }
  handleGoogleSignIn = () => {
    this.angularFire
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.user));
        this.auth.isLoggedIn = true;
        this.router.navigate(['']);
      })
      .catch((err) => {
        alert('not-success');
      });
  };
}
