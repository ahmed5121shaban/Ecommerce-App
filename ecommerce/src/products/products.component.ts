import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../Interfaces/Iproduct';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!:Iproduct[]
  categoryList!:any[]
  constructor(private service:ProductService) {}


  ngOnInit() {
    this.service.getAllProduct().subscribe({
      next:(item:any)=>{
        this.products = item
      }
    })
    this.service.getAllCategory().subscribe((items:any)=>{
      this.categoryList = items
    })
  }

  addToCart(item:Iproduct){
    this.service.addToCart(item)
  }

  getCategoryList(item:string){
    this.service.getProductByCategory(item).subscribe((pro:any)=>this.products = pro)
  }


}
