import { Component } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'agency-payment-web-app';

  constructor(private http: HttpClient) { }

  order = {price: "10", description: "webshop item name"}

  close() {
    window.close()
    console.log("ajdeee")
  }

  payWithPayPal() {
    axios.post(environment.PayPalAPI + 'pay', this.order)
    .then(response => {
      console.log(response.data)
    })
    .catch(e => {
     console.log(e.response.data)
    })
  }
}



