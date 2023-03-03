import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products';
import { products, products2 } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[] | undefined;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().then((data: any) => {
      this.products = data;
      console.log(this.products);
    });
  }
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

@Component({
  selector: 'app-products',
  template: `
      <ul>
        <li *ngFor="let product of products">{{ product.id }}</li>
      </ul>
    `,
})
export class ProductsComponent implements OnInit {
  products: any[] | undefined;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().then((data: any) => {
      this.products = data;
      console.log(this.products);
    });
  }
}
/*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */
