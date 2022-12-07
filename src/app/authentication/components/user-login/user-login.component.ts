import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from '../../login-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  constructor(private router: Router, private auth:AuthService) {}

  form: LoginForm = {
    email: '',
    password: '',
  };
  
  toRegister() {
    this.router.navigateByUrl('/register');
  }
  onSubmit() {
    this.auth.login(this.form)
  }
  isLoading() {
    return this.auth.isLoading;
  }
}
