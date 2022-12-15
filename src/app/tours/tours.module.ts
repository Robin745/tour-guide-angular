import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursComponent } from './tours.component';
import { TourComponent } from './tour/tour.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';

@NgModule({
  declarations: [ToursComponent, TourComponent, TourDetailsComponent],
  providers: [],
  imports: [CommonModule],
  exports: [ToursComponent],
})
export class ToursModule {}
