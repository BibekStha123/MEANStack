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

  constructor(private _service : CustomerService, private _router: Router) { }

  submitted: boolean;

  ngOnInit() {
  }

  onCreate(form : NgForm)
  {

    this._service.createCustomer(form).subscribe(
      (data)=>{
        // console.log(data);
        this.submitted = true;
        window.location.reload();
       
      },
      (err)=>{
        return err;
      }
      
    )
  }

  onLogout()
  {
    localStorage.clear();
    this._router.navigate(['/']);
  }

}
