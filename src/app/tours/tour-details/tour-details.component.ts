import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css'],
})
export class TourDetailsComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private apiService: ApiServiceService
  ) {}
  ngOnInit(): void {
    this.findTour();
  }
  icon = faCartShopping;
  tour: any = {};
  idRequest: any = {
    oid: this._route.snapshot.params['oid'],
  };

  findTour() {
    console.log(this.idRequest);
    this.apiService.findTour(this.idRequest).subscribe(
      (data) => {
        if (data) {
          if (data.status === false) {
          } else {
            this.tour = data;
          }
        } else {
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
