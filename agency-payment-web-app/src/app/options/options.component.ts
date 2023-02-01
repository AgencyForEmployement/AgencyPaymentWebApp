import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(private cookieService: CookieService) { }

  order = {price: "", description: "", pib: "", merchantOrderId: "",merchantOrderTimestamp: "" }

  ngOnInit(): void {
    setTimeout(()=>{
      this.order.price = this.cookieService.get('price')
      this.order.description = this.cookieService.get('description')
      this.order.pib = this.cookieService.get('pib')
      this.order.merchantOrderId = this.cookieService.get('merchantOrderId')
      this.order.merchantOrderTimestamp = this.cookieService.get('merchantOrderTimestamp')
      console.log(this.order.price)
  }, 10);
  }

  payWithPayPal() {
    if (this.order.price != "" && this.order.description != ""){
    axios.post(environment.PayPalAPI + 'pay', this.order)
    .then(response => {
      this.cookieService.delete('description')
      this.cookieService.delete('price')
      window.location.href = response.data;
    })
    .catch(e => {
     console.log(e.response.data)
    })
  } else 
    alert("Payment not possible, you were not redirected here.")
  }

  payWithCreditCard(){
    if (this.order.price != "" && this.order.description != ""){
      axios.post(environment.PSP + 'bank', this.order)
      .then(response => {
        document.cookie = 'paymentId =' + response.data.paymentId.toString();
        document.cookie = 'description =' + this.order.description.toString();
        document.cookie = 'amount =' + response.data.amount.toString();
        document.cookie = 'successUrl =' + response.data.successUrl.toString();
        document.cookie = 'failedUrl =' + response.data.failedUrl.toString();
        document.cookie = 'errorUrl =' + response.data.errorUrl.toString();
        alert(response.data.paymentURL)
        window.location.href = response.data.paymentURL;
      })
      .catch(e => {
       console.log(e.response.data)
      })
    } else 
      alert("Payment not possible, you were not redirected here.")
  }
}
