import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToursModule } from './tours/tours.module';
import { CartComponent } from './cart/cart.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { firebaseConfig } from './firebase.config';
import { PERSISTENCE } from '@angular/fire/compat/auth';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, CartComponent],
  imports: [BrowserModule, AppRoutingModule, ToursModule, AuthenticationModule],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: firebaseConfig }],
  bootstrap: [AppComponent],
})
export class AppModule {}
