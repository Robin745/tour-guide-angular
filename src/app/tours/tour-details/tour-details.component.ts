import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css'],
})
export class TourDetailsComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private apiService: ApiServiceService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.findTour();
  }
  icon = faCartShopping;

  idRequest: any = {
    oid: this._route.snapshot.params['oid'],
  };

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

  //add to cart
  addToCart() {
    console.log(this.tour);
    this.apiService.add_to_cart(this.tour).subscribe(
      (data) => {
        if (data) {
          if (data.status === false) {
            this.toastr.error(data.message);
          } else {
            this.toastr.success(data.message);
            this.router.navigateByUrl('/cart');
          }
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
