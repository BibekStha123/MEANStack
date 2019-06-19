import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../shared/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  private customers : any;//always use any, never define specific(you will get error)
  delete: boolean;

  constructor(private _service: CustomerService, private _router: Router) { }

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
       //console.log("deleted");
       this._router.navigate(['/home']);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  onDelete(id)
  {
    // console.log(id);
    if(confirm("Are you sure you want to delete?")){
      this._service.deleteCustomer(id).subscribe(
        (data)=>{
         //console.log("deleted");
         this.delete=true;
         setTimeout(function(){
           this.delete =false,
           3000
         });
        },
        (err)=>{
          console.log(err);
        }
      )
    }
  }

}
 