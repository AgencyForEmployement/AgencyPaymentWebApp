import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paypal-fail',
  templateUrl: './paypal-fail.component.html',
  styleUrls: ['./paypal-fail.component.css']
})
export class PaypalFailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    window.close()
  }

}
