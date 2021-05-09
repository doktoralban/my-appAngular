import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { GreetComponent } from './greet/greet.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginformComponent } from './loginform/loginform.component';
import { HotelinfocardsComponent } from './hotelinfocards/hotelinfocards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { OurteamComponent } from './ourteam/ourteam.component';

import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginformComponent,
    HotelinfocardsComponent,
    CarouselComponent,
    LightboxComponent,
    ParallaxComponent,
    OurteamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
