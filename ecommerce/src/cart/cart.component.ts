import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Iproduct } from '../Interfaces/Iproduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:Iproduct[]
  constructor(private service:ProductService) {
    this.cart = this.service.cart
  }

  ngOnInit() {
  }

}
