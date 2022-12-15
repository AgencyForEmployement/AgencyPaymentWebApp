import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaypalFailComponent } from './paypal-fail/paypal-fail.component';
import { PaypalSuccessComponent } from './paypal-success/paypal-success.component';

const routes: Routes = [
  { path: 'paypal-success', component: PaypalSuccessComponent},
  { path: 'paypal-fail', component: PaypalFailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
