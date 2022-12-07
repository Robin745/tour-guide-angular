import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthenticationComponent,
    UserLoginComponent,
    UserRegisterComponent,
  ],
  imports: [CommonModule, AuthenticationRoutingModule, FormsModule],
})
export class AuthenticationModule {}
