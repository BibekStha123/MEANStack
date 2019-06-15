import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 

import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './about/about.component';


const routes : Routes = [
    { path: '', component: CustomerComponent },
    { path: 'home', component: CustomerComponent  },
    { path: 'about', component:   AboutComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }

export const routingComponents = [
  AboutComponent,
  CustomerComponent,
];
