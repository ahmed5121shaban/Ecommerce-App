
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { SingleProductComponent } from '../single-product/single-product.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductsComponent } from '../products/products.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TextLittlePipe } from '../Pipes/textLittle.pipe';
import { TitleLitlePipe } from '../Pipes/titleLitle.pipe';
import { spinnerInterceptor } from '../Interceptors/spinner.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductsComponent,
    SingleProductComponent,
    NavBarComponent,
    FooterComponent,
    TextLittlePipe,
    TitleLitlePipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,

  ],
  providers: [provideHttpClient(withInterceptors([spinnerInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
