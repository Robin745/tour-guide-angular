import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursComponent } from './tours.component';
import { TourComponent } from './tour/tour.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ToursComponent, TourComponent, TourDetailsComponent],
  providers: [],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ToursComponent],
})
export class ToursModule {}
