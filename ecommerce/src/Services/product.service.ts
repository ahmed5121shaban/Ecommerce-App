import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../Interfaces/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
API = "https://fakestoreapi.com/products"
cart:Iproduct[]=[]
constructor(private http:HttpClient) { }
getAllProduct(){
  return this.http.get(this.API);
}
addToCart(item:Iproduct){
  this.cart.push(item)
}

}
