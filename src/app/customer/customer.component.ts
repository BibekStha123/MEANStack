import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../shared/customer.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private _service : CustomerService) { }

  router: Router;

  ngOnInit() {
  }

  onCreate(form : NgForm)
  {
    this._service.createCustomer(form).subscribe(
      (data)=>{
        return data;
        this.router.navigate(['/']);
      },
      (err)=>{
        return err;
      }
    )
  }

}
