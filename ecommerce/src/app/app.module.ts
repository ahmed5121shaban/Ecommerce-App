import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { FilterProductsComponent } from '../filter-products/filter-products.component';
import { SingleProductComponent } from '../single-product/single-product.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductsComponent } from '../products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    FilterProductsComponent,
    ProductsComponent,
    SingleProductComponent,
    NavBarComponent,
    FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
