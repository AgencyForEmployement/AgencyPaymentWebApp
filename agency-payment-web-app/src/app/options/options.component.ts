import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor() { }

  order = {price: "10", description: "webshop item name"}

  ngOnInit(): void {
    setTimeout(()=>{
      this.order.price = JSON.parse(localStorage.getItem('price') || '10');
      this.order.description = JSON.parse(localStorage.getItem('description') || 'webshop item name');
  }, 100);
  }

  payWithPayPal() {
    axios.post(environment.PayPalAPI + 'pay', this.order)
    .then(response => {
      console.log(response.data)
      window.location.href = response.data;
    })
    .catch(e => {
     console.log(e.response.data)
    })
  }
}
