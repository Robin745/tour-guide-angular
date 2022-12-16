import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { ToastrService } from 'ngx-toastr';
import { ToursData } from './tours-data';
import { Router } from '@angular/router';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private apiService: ApiServiceService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getToursList();
  }
  icon1 = faPenToSquare;
  icon2 = faTrash;

  //storing all tours data
  tours: any[] = [];
  getToursList() {
    this.apiService.getTours('').subscribe(
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

  //structure tour data
  tour: ToursData = {
    title: '',
    img: '',
    price: '',
    description: '',
  };
  setTourData() {
    console.log(this.tour);
    this.apiService.setTours(this.tour).subscribe(
      (data) => {
        if (data) {
          if (data.status === false) {
            this.toastr.error(data.message);
          } else {
            this.toastr.success(data.message);
            this.router.navigateByUrl('/');
          }
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  //setting up remove tours
  idRequest: any = {
    oid: '',
  };
  deleteTour(oid: string) {
    this.idRequest.oid = oid;
    console.log(this.idRequest);
    this.router.navigateByUrl('/admin-dashboard');

    this.apiService.removeTour(this.idRequest).subscribe(
      (data) => {
        if (data) {
          if (data.status === false) {
          } else {
            this.tour = data;
            this.getToursList();
          }
        } else {
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  //setting up updating tours

  updateTour(oid: string) {
    this.idRequest.oid = oid;
    console.log(this.idRequest);
    this.router.navigate(['/update-tour/', oid]);
  }
}
