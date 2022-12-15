import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-paypal-success',
  templateUrl: './paypal-success.component.html',
  styleUrls: ['./paypal-success.component.css']
})
export class PaypalSuccessComponent implements OnInit {

  constructor() { }

  transaction = {id: "", amount:"", description: ""}

  ngOnInit(): void {
  }

  saveTransactionOnPSP() {
    axios.post(environment.PSPAPI + 'PayPalTransaction', this.transaction)
    .then(res => {
      console.log("success")
    })
  }


}
