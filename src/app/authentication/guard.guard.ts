import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {
  //dependency injection
  constructor(private auth: AuthService) { }

  //private route will open Only if isLoggedIn is true.
  canActivate() {
    return this.auth.isLoggedIn;
  }
}
