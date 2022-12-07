import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { LoginForm } from './login-form';
import { RegisterForm } from './register-form';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  isLoading: boolean = false;
  isPassMatched: boolean = false;
  isLoggedIn: boolean = false;

  //login function
  login(form: LoginForm) {
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        this.isLoggedIn = true;
        this.router.navigate(['']);
      })
      .catch((error) => {
        this.isLoggedIn = false;
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => (this.isLoading = false));
  }

  //register function
  register(form: RegisterForm) {
    this.isLoading = true;
    if (form.password !== form.confirmPassword) {
      this.isPassMatched = true;
      this.isLoading = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isLoggedIn = true;
        const user = userCredential.user;
        this.router.navigate(['']);
      })
      .catch((error) => {
        this.isLoggedIn = false;
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => (this.isLoading = false));
  }

  //log out
  signOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.isLoggedIn = false;
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }
}
