import { Component, OnInit } from '@angular/core';
import { ToursData } from '../dashboard/tours-data';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private apiService: ApiServiceService, private router: Router) {}
  ngOnInit(): void {
    this.getCartsList();
  }

  //storing all tours data
  carts: any[] = [];
  getCartsList() {
    this.apiService.getCart('').subscribe(
      (data) => {
        if ((data.code = '200')) {
          this.carts = data.cartData;
          console.log(this.carts);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  id: any = {
    oid: '',
  };
  icon = faTrash;

  deleteFromCart(oid: string) {
    this.id.oid = oid;
    console.log(this.id);

    this.apiService.removeCartItem(this.id).subscribe(
      (data) => {
        if (data) {
          if (data.status === false) {
          } else {
            // this.tour = data;
            this.getCartsList();
          }
        } else {
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  toCheckout() {
    this.router.navigateByUrl('/checkout');
  }
}
