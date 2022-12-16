import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TourData } from '../tour-data';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css'],
})
export class TourComponent {
  constructor(private router: Router) {}
  @Input() data: TourData = {} as TourData;
  viewDetails(oid: string) {
    this.router.navigate(['/details/', oid]);
  }
}
