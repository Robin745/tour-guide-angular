import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToursModule } from './tours/tours.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, CartComponent],
  imports: [BrowserModule, AppRoutingModule, ToursModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
