import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ToursData } from '../tours-data';

@Component({
  selector: 'app-update-tour',
  templateUrl: './update-tour.component.html',
  styleUrls: ['./update-tour.component.css'],
})
export class UpdateTourComponent implements OnInit {
  constructor(
    private router: Router,
    private _route: ActivatedRoute,
    private apiService: ApiServiceService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.findTour();
  }

  //storing oid to find tour
  idRequest: any = {
    oid: this._route.snapshot.params['oid'],
  };

  // toursData: ToursData = {
  //   title: '',
  //   img: '',
  //   price: '',
  //   description: '',
  // };

  setTourData() {
    // this.router.navigateByUrl('/update-tour/:id');
    console.log(this.tour);
    this.updateTourData();
  }
  //find tour by oid and store in variable
  tour: any = {};
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

  updateTourData() {
    console.log(this.tour);
    this.apiService.updateTour(this.tour).subscribe(
      (data) => {
        if (data) {
          if (data.status === false) {
            this.toastr.error(data.message);
          } else {
            this.toastr.success(data.message);
            // this.router.navigateByUrl('/');
          }
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
