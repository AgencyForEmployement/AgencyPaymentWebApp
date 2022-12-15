import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaypalSuccessComponent } from './paypal-success/paypal-success.component';
import { PaypalFailComponent } from './paypal-fail/paypal-fail.component';
import { OptionsComponent } from './options/options.component';


@NgModule({
  declarations: [
    AppComponent,
    PaypalSuccessComponent,
    PaypalFailComponent,
    OptionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
