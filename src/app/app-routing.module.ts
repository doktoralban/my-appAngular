import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginformComponent} from './loginform/loginform.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'loginForm', component: LoginformComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
