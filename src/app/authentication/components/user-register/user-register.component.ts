import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterForm } from '../../register-form';
import { AuthService } from '../../auth.service';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent {
  constructor(
    private router: Router,
    private auth: AuthService,
    private toastr: ToastrService,
    private apiService: ApiServiceService
  ) {}
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
    this.auth.register(this.form);
    if (this.auth.isPassMatched) {
      return;
    } else {
      this.addUserData();
    }
  }
  isPassMatched() {
    return this.auth.isPassMatched;
  }
  isLoading() {
    return this.auth.isLoading;
  }

  addUserData() {
    console.log(this.form);
    this.apiService.addUser(this.form).subscribe(
      (data) => {
        if (data.status === false) {
          this.toastr.error(data.message);
          this.auth.isLoading = false;
          console.log(data);
        } else {
          this.toastr.success('Success! Now login in');
          this.auth.isLoading = false;
          this.router.navigateByUrl('/login');
          console.log(data);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
