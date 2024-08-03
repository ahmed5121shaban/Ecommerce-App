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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TextLittlePipe } from '../Pipes/textLittle.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    FilterProductsComponent,
    ProductsComponent,
    SingleProductComponent,
    NavBarComponent,
    FooterComponent,
    TextLittlePipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
