import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { SETTINGS as AUTH_SETTINGS } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';
import { PERSISTENCE } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    AuthenticationComponent,
    UserLoginComponent,
    UserRegisterComponent,
  ],
  providers: [
    {
      provide: AUTH_SETTINGS,
      useValue: { appVerificationDisabledForTesting: true },
    },
    { provide: PERSISTENCE, useValue: 'local' },
  ],
  imports: [CommonModule, AuthenticationRoutingModule, FormsModule],
})
export class AuthenticationModule {}
