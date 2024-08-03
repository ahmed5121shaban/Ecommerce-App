import { Component, OnInit, Output, OutputEmitterRef } from '@angular/core';
import { Iproduct } from '../Interfaces/Iproduct';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!:Iproduct[]
  constructor(private service:ProductService) {
    this.service.getAllProduct().subscribe({
      next:(item:any)=>{
        this.products = item
      }
    })
  }

  addToCart(item:Iproduct){
    this.service.addToCart(item)
  }

  ngOnInit() {
  }

}
