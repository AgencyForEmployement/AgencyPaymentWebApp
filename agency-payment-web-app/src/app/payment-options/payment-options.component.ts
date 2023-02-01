import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.css']
})
export class PaymentOptionsComponent implements OnInit {

  options = {id: "1", card: false, qr: false, paypal: false, bitcoin: false}
  id = localStorage.getItem("id");
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("token") == null){
      this.router.navigate(["/login"])
    }
    axios.get(environment.PSPAPI + "authentication/getPayments/" + this.id)
    .then(response => {
      console.log(response.data)
      this.options.card = response.data.card
      this.options.qr = response.data.qr
      this.options.paypal = response.data.paypal
      this.options.bitcoin = response.data.bitcoin
      console.log(this.options)
    })
    .catch(e => {
     console.log(e.response.data)
    })
  }

  changePayments() {
    console.log(this.options)
    this.options.id = JSON.parse(localStorage.getItem('id') || '{}');
    axios.post(environment.PSPAPI + 'authentication/changePayments', this.options)
    .then(response => {
      alert("Successfully changed!")
    })
    .catch(e => {
     console.log(e.response.data)
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['/login'])
  }

}
