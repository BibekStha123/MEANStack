import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { GoogleLoginProvider, AuthServiceConfig, SocialLoginModule } from 'angularx-social-login';

import { AppComponent } from './app.component';
import { CustomerService } from './shared/customer.service';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './shared/token-interceptor.service';
import { NavbarComponent } from './navbar/navbar.component';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("3167004309-chbqm3sinv7o1kv19dcfrdta5pc4q180.apps.googleusercontent.com")

  }
]);

export function provideConfig(){
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CustomerListComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [CustomerService,
    {provide: AuthServiceConfig, useFactory: provideConfig},
     AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
