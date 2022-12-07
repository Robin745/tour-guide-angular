import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { LoginForm } from './login-form';
import { RegisterForm } from './register-form';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoading: boolean = false;
  isPassMatched: boolean = false;
  isLoggedIn: boolean = false;

  login(form: LoginForm) {
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        this.isLoggedIn = true;
      })
      .catch((error) => {
        this.isLoggedIn = false;
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => (this.isLoading = false));
  }

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
        // Signed in
        this.isLoggedIn = true;
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        this.isLoggedIn = false;
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(() => (this.isLoading = false));
  }
}
