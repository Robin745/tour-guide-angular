import { Injectable } from '@angular/core';
import { Tour } from './tour.data';

@Injectable()
export class ToursService {
  constructor() {}
  tourData: Tour[] = [
    {
      name: 'Saint Martin',
      image: 'https://i.ibb.co/rmZMScF/saintmartin.jpg',
      title:
        "Saint Martin is only coral island in banglades. It's Most beautiful place to visit",
      price: 290,
    },
    {
      name: 'Sajek Valley',
      image: 'https://i.ibb.co/vm9QmvL/sajek.jpg',
      title:
        "Saint Martin is only coral island in banglades. It's Most beautiful place to visit",
      price: 130,
    },

    {
      name: 'Bandarban',
      image: 'https://i.ibb.co/n1F5zzs/bandarban.jpg',
      title:
        "Saint Martin is only coral island in banglades. It's Most beautiful place to visit",
      price: 220,
    },
    {
      name: "Cox's Bazar",
      image: "../../assets/images/cox's.jpg",
      title:
        "Saint Martin is only coral island in banglades. It's Most beautiful place to visit",
      price: 200,
    },
    {
      name: 'Syleht',
      image: 'https://i.ibb.co/9yx3qF4/sylhet.jpg',
      title:
        "Saint Martin is only coral island in banglades. It's Most beautiful place to visit",
      price: 200,
    },
    {
      name: 'Rajshahi',
      image: '../../assets/images/rajshahi.jpg',
      title:
        "Saint Martin is only coral island in banglades. It's Most beautiful place to visit",
      price: 200,
    },
  ];
  getTourData() {
    return this.tourData;
  }
}
