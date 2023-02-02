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

  order = {price: "", description: "", pib: "", merchantOrderId: "",merchantOrderTimestamp: "" }
  client = ""

  ngOnInit(): void {
    setTimeout(()=>{
      this.order.price = this.cookieService.get('price')
      this.order.description = this.cookieService.get('description')
      this.order.pib = this.cookieService.get('pib')
      this.order.merchantOrderId = this.cookieService.get('merchantOrderId')
      this.order.merchantOrderTimestamp = this.cookieService.get('merchantOrderTimestamp')
      this.client = this.cookieService.get('client')
      console.log(this.order.price)
  }, 10);
  }

  randomString(length:number, chars:string) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
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
      axios.post(environment.PSPAPI + 'bank', this.order)
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
  payWithQRCode() {
    if (this.order.price != "" && this.order.description != ""){
      console.log(this.order);
      axios.post(environment.PSPAPI + 'bank', this.order)
      .then(response => {
        document.cookie = 'paymentId =' + response.data.paymentId.toString();
        document.cookie = 'description =' + this.order.description.toString();
        document.cookie = 'amount =' + response.data.amount.toString();
        document.cookie = 'successUrl =' + response.data.successUrl.toString();
        document.cookie = 'failedUrl =' + response.data.failedUrl.toString();
        document.cookie = 'errorUrl =' + response.data.errorUrl.toString();
        document.cookie = 'client=' + this.client;
        console.log(response);
        console.log(document.cookie)
        window.open('http://localhost:4203/qr-code', "_blank");
      })
      .catch(e => {
       console.log(e)
      })
    } else 
      alert("Payment not possible, you were not redirected here.")    
  }
    
}
