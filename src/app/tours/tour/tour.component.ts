import { Component, Input } from '@angular/core';
import { Tour } from '../tour.data';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css'],
})
export class TourComponent {
  @Input() data: Tour = {} as Tour;
}
