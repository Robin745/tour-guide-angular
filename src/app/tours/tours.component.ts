import { Component } from '@angular/core';
import { Tour } from './tour.data';
import { ToursService } from './tours.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css'],
})
export class ToursComponent {
  constructor(private tourData: ToursService) {
    this.data = this.tourData.getTourData();
  }

  data: Tour[] = [];
  getData() {
    console.log(this.data);
  }
}
