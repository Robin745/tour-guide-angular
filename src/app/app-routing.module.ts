import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { UserLoginComponent } from './authentication/components/user-login/user-login.component';
import { UserRegisterComponent } from './authentication/components/user-register/user-register.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { ToursComponent } from './tours/tours.component';

const routes: Routes = [
  {
    path: '',
    component: ToursComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
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
    path: 'authectication',
    component: AuthenticationComponent,
    loadChildren: () =>
      import('../app/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
    // children: [
    //   {
    //     path: 'user-login',
    //     component: UserLoginComponent
    //   },
    //   {
    //     path: 'user-register',
    //     component: UserRegisterComponent
    //   }
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
