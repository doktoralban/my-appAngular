import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { GreetComponent } from './greet/greet.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    NavbarComponent,
    LoginFormComponent,
    FooterComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
