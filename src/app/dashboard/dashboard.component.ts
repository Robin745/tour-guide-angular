import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { Tour } from '../tours/tour.data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private apiService: ApiServiceService) {}
  ngOnInit(): void {
    this.getUserList();
  }

  users: any[] = [];

  getUserList() {
    this.apiService.getUsers('').subscribe(
      (data) => {
        if ((data.code = '200')) {
          this.users = data.userData;
          console.log(this.users);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
