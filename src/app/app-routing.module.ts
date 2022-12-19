import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { UserLoginComponent } from './authentication/components/user-login/user-login.component';
import { UserRegisterComponent } from './authentication/components/user-register/user-register.component';
import { GuardGuard } from './authentication/guard.guard';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateTourComponent } from './dashboard/update-tour/update-tour.component';
import { CheckoutComponent } from './tours/checkout/checkout.component';
import { TourDetailsComponent } from './tours/tour-details/tour-details.component';
import { ToursComponent } from './tours/tours.component';

const routes: Routes = [
  {
    path: '',
    component: ToursComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [GuardGuard],
  },
  {
    path: 'login',
    component: UserLoginComponent,
  },
  {
    path: 'register',
    component: UserRegisterComponent,
  },
  {
    path: 'details/:oid',
    component: TourDetailsComponent,
  },
  {
    path: 'admin-dashboard',
    component: DashboardComponent,
    canActivate: [GuardGuard],
  },
  {
    path: 'update-tour/:oid',
    component: UpdateTourComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'authectication',
    component: AuthenticationComponent,
    loadChildren: () =>
      import('../app/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
