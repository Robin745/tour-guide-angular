import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterForm } from '../../register-form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent {
  constructor(private router: Router) {}
  form: RegisterForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  toLogin() {
    this.router.navigateByUrl('/login');
  }
  onSubmit() {
    if (this.form.password !== this.form.confirmPassword) {
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
}
