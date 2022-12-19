import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(private cookieService: CookieService) { }

  order = {price: "0", description: "webshop item name"}

  ngOnInit(): void {
    setTimeout(()=>{
      this.order.price = this.cookieService.get('price')
      this.order.description = this.cookieService.get('description')
  }, 10);
  }

  payWithPayPal() {
    axios.post(environment.PayPalAPI + 'pay', this.order)
    .then(response => {
      this.cookieService.delete('description')
      this.cookieService.delete('price')
      window.location.href = response.data;
    })
    .catch(e => {
     console.log(e.response.data)
    })
  }
}
