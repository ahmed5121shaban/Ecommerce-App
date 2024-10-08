import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProductComponent } from '../single-product/single-product.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ProductsComponent } from '../products/products.component';
import { CartComponent } from '../cart/cart.component';

const routes: Routes = [
  {path:"single-product/:d",component:SingleProductComponent},
  {path:"",component:ProductsComponent},
  {path:"cart",component:CartComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
