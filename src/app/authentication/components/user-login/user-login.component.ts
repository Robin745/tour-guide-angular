import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from '../../login-form';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  constructor(private router: Router) {}

  form: LoginForm = {
    email: '',
    password: '',
  };

  toRegister() {
    this.router.navigateByUrl('/register');
  }
  onSubmit() {
    console.log(this.form);
  }
}
