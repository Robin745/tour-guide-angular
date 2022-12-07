import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterForm } from '../../register-form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent {
  constructor(private router: Router, private auth:AuthService) {}
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
    this.auth.register(this.form)
  }
  isPassMatched() {
    return this.auth.isPassMatched;
  }
  isLoading() {
    return this.auth.isLoading;
  }
}
