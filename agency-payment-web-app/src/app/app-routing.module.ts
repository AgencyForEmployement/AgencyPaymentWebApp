import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionsComponent } from './options/options.component';
import { PaypalFailComponent } from './paypal-fail/paypal-fail.component';
import { PaypalSuccessComponent } from './paypal-success/paypal-success.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'paypal-success', component: PaypalSuccessComponent},
  { path: 'paypal-fail', component: PaypalFailComponent},
  { path: 'payment-options', component: PaymentOptionsComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: OptionsComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
