import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Array<IProduct> = [];
  constructor(private prodService: ProductService) {}

  ngOnInit() {

    this.prodService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
