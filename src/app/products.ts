import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  async getProducts() {
    const data = await this.http
      .get('https://fakestoreapi.com/products?limit=5')
      .toPromise();
    return data;
  }
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products2 = async () => {
  const data = await fetch('https://fakestoreapi.com/products?limit=5');
  return data.json;
};
export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
