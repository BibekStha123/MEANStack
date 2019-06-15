import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../shared/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  private customers : any;//always use any, never define specific(you will get error)
  constructor(private _service: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers()
  {
    this._service.getCustomer().subscribe(
      (data)=>{
        this.customers = data;
        // console.log(this.customers);
        return this.customers;
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  onEdit(id)
  {
    // console.log(id);
    this._service.updateCustomer(id).subscribe(
      (data)=>{
        return data;
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  onDelete(id)
  {
    // console.log(id);
    this._service.deleteCustomer(id).subscribe(
      (data)=>{
        return ImageData;
      },
      (err)=>{
        console.log(err);
      }
    )
  }
}
 