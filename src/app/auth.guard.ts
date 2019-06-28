import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CustomerService } from './shared/customer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private _service: CustomerService, private _router: Router){

  }

  canActivate(): boolean{
    if(this._service.loggedIn()){
      return true;
    }else{
      this._router.navigate(['/login']);
      return false;
    }
  }
}
