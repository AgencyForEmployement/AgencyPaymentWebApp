import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  info = {pib: "", password: ""}
  registerInfo = {
                  pib: "123456", 
                  name: "Agency", 
                  description: "Employment Agency", 
                  password: "agency", 
                  address: {city: "Novi Sad", street: "Tolstojeva", number: "12", country: "Srbija"}
                }
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.info)
    if (this.info.pib != "" && this.info.password != ""){
      axios.post(environment.PSPAPI + 'authentication/login', this.info)
      .then(response => {
        localStorage.setItem("token", response.data.accessToken)
        localStorage.setItem("id", response.data.id)
        localStorage.setItem("apiKey", response.data.apiKey)
        this.router.navigate(['/payment-options'])
      })
      .catch(e => {
       console.log(e.response.data)
      })
    } else 
      alert("Enter your credentials.")
    }

    registerCompany() {
      axios.post(environment.PSPAPI + 'authentication/registration', this.registerInfo)
      .then(response => {
        this.router.navigate(['/login'])
      })
      .catch(e => {
       console.log(e.response.data)
      })
    }
}
