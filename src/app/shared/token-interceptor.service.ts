import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req, next)
  {
    let token = req.clone({
      setHeaders:{
        Authorization: 'Bearer aa.bb.cc'
      }
    })
    return next.handle(token);
  }
}
