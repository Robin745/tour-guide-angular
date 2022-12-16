import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginForm } from '../authentication/login-form';
import { RegisterForm } from '../authentication/register-form';
import { ToursData } from '../dashboard/tours-data';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private httpClient: HttpClient) {}

  findUser(loginRequest: LoginForm): Observable<any> {
    return this.httpClient.post<any>(
      `http://localhost:4000/login`,
      loginRequest
    );
  }
  findTour(toursOid: any): Observable<any> {
    return this.httpClient.post<any>(
      `http://localhost:4000/tours/get-by-oid`,
      toursOid
    );
  }
  getUsers(userListRequest: any): Observable<any> {
    return this.httpClient.get<any>(
      'http://localhost:4000/users',
      userListRequest
    );
  }
  getTours(toursListRequest: any): Observable<any> {
    return this.httpClient.get<any>(
      'http://localhost:4000/tours',
      toursListRequest
    );
  }
  setTours(addToursRequest: ToursData): Observable<any> {
    return this.httpClient.post<any>(
      `http://localhost:4000/tours/add-tours`,
      addToursRequest
    );
  }
  removeTour(tourOid: any): Observable<any> {
    return this.httpClient.post<any>(
      `http://localhost:4000/tours/remove`,
      tourOid
    );
  }
  updateTour(updateToursRequest: any): Observable<any> {
    return this.httpClient.post<any>(
      `http://localhost:4000/tours/update-tour`,
      updateToursRequest
    );
  }
  addUser(addUserRequest: any): Observable<any> {
    return this.httpClient.post<any>(
      `http://localhost:4000/users/add`,
      addUserRequest
    );
  }
}
