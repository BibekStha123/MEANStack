import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from './../shared/customer.service';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router, private _service: CustomerService, private authService: AuthService) { }

  user: any = SocialUser;

  ngOnInit() {
  }

  onLogin(form: NgForm)
  {
    this._service.userLogin(form).subscribe(
      (data)=>{
        // console.log(data['token']);

        localStorage.setItem('token', data['token']);
        this._router.navigateByUrl('/home');
      },
      (err)=>{
        // console.log(err.error.message);
        alert("Credential doesnot match. Register before login.");
      }
      
    )
    // this._router.navigateByUrl('/home');
  }

  onRegister()
  {
    this._router.navigateByUrl('/register');
  }

  googleLogin()
  {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      function(userData){
        console.log(userData);
      }
    )
  }

}
