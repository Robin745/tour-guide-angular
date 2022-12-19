import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursComponent } from './tours.component';
import { TourComponent } from './tour/tour.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CheckoutComponent } from './checkout/checkout.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    ToursComponent,
    TourComponent,
    TourDetailsComponent,
    CheckoutComponent,
  ],
  providers: [],
  imports: [CommonModule, FontAwesomeModule, IvyCarouselModule],
  exports: [ToursComponent],
})
export class ToursModule {}
