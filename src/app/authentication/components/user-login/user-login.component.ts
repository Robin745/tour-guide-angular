import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from '../../login-form';
import { AuthService } from '../../auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  constructor(
    private router: Router,
    private auth: AuthService,
    private angularFire: AngularFireAuth,
    private apiService: ApiServiceService
  ) {}

  form: LoginForm = {
    email: '',
    password: '',
  };

  goToRegister() {
    this.router.navigateByUrl('/register');
  }
  onSubmit() {
    this.auth.login(this.form);
    this.getUser();
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
      .catch(() => {
        alert('not-success');
      });
  };
  getUser() {
    this.apiService.findUser(this.form).subscribe(
      (data) => {
        console.log(data);
        if (data.code == '200') {
          localStorage.setItem('user-role', JSON.stringify(data));
        } else {
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
