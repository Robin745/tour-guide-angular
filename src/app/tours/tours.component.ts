import { Component, OnInit } from '@angular/core';
import { ToursData } from '../dashboard/tours-data';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css'],
})
export class ToursComponent implements OnInit {
  constructor(private toursData: ApiServiceService) {}
  ngOnInit(): void {
    this.getToursList();
  }
  tours: any[] = [];
  getToursList() {
    this.toursData.getTours('').subscribe(
      (data) => {
        if ((data.code = '200')) {
          this.tours = data.toursData;
          console.log(this.tours);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getData() {
    console.log(this.tours);
  }
}
