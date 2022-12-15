import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToursData } from 'src/app/dashboard/tours-data';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css'],
})
export class TourComponent {
  constructor(private router: Router) {}
  @Input() data: ToursData = {} as ToursData;
  viewDetails(oid: string) {
    this.router.navigate(['/details/', oid]);
  }
}
