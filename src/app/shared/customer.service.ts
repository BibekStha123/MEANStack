import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private uri = "http://localhost:3000";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http : HttpClient) { }

  createCustomer(customer : any)
  {
     return this.http.post(this.uri+'/submit', customer, {headers: this.headers});
  }

  getCustomer()
  {
    return this.http.get(this.uri+'/getAll', {headers: this.headers});
  }

  updateCustomer(id: string)
  {
    return this.http.put(this.uri+'/edit/'+id, {headers: this.headers});
  }

  deleteCustomer(id: string)
  {
    return this.http.delete(this.uri+'/delete/'+id, {headers: this.headers});
  }

  userSignup(user: any)
  {
    return this.http.post(this.uri+'/signup', user, {headers: this.headers});
  }

  userLogin(user: any)
  {
    return this.http.post(this.uri+'/login', user, {headers: this.headers});
  }

}
