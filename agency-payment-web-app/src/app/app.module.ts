import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaypalSuccessComponent } from './paypal-success/paypal-success.component';
import { PaypalFailComponent } from './paypal-fail/paypal-fail.component';
import { OptionsComponent } from './options/options.component';
import { CookieService } from 'ngx-cookie-service';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    PaypalSuccessComponent,
    PaypalFailComponent,
    OptionsComponent,
    PaymentOptionsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
