import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursService } from './tours.service';
import { ToursComponent } from './tours.component';
import { TourComponent } from './tour/tour.component';

@NgModule({
  declarations: [ToursComponent, TourComponent],
  providers: [ToursService],
  imports: [CommonModule],
  exports: [ToursComponent],
})
export class ToursModule {}
