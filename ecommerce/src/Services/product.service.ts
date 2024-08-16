import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Iproduct } from '../Interfaces/Iproduct';


@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {
productApi = "https://fakestoreapi.com/products";
categoryApi = "https://fakestoreapi.com/products/categories";

cart:Iproduct[]=[]
constructor(private http:HttpClient) { }
  ngOnInit(): void {

  }
getAllProduct(){
  return this.http.get(this.productApi);
}
getAllCategory(){
  return this.http.get(this.categoryApi);
}
addToCart(item:Iproduct){
  this.cart.push(item)
}

getProductByCategory(catName:string){
  return this.http.get(`https://fakestoreapi.com/products/category/${catName}`);
}

}
