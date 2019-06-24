import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from './../shared/customer.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _router: Router, private _service: CustomerService) { }

  exist: boolean;

  ngOnInit() {
  }

  onRegister(form: NgForm)
  {
    // console.log(form);
    this._service.userSignup(form).subscribe(
      (data)=>{
        // console.log("registerd");          
        alert("Successfully registered. Now you can login.")
        this._router.navigateByUrl('/login');

      },
      (err)=>{
        // console.log(err.error.message)
        alert(err.error.message);
      }
    )
    
  }

}
