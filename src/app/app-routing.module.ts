import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 

import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';


const routes : Routes = [
    { path: '', component: RegisterComponent },
    { path: 'home', component: CustomerComponent, canActivate: [AuthGuard] },
    { path: 'about', component:   AboutComponent, canActivate: [AuthGuard] },
    { path: 'login', component:   LoginComponent },
    { path: 'register', component:   RegisterComponent }
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
  RegisterComponent,
  LoginComponent
];
