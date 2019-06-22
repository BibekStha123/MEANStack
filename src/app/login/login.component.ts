import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from './../shared/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router, private _service: CustomerService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm)
  {
    this._service.userLogin(form).subscribe(
      (data)=>{
      //  console.log(data);
      },
      (err)=>{
        
      }
    )
    // this._router.navigateByUrl('/home');
  }

  onRegister()
  {
    this._router.navigateByUrl('/register');
  }

}
