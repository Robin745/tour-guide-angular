import { Component } from '@angular/core';
import { ToursData } from '../dashboard/tours-data';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  //structure tour data
  tour: ToursData = {
    title: 'Saint marting',
    img: 'https://i.ibb.co/n1F5zzs/bandarban.jpg',
    price: '450',
    description: '',
  };
  oid: string = '';
  icon = faTrash;
  deleteFromCart(oid: string) {
    console.log(oid);
  }
}
