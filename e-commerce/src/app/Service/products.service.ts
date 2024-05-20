import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ProductList } from '../Components/products/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  api = "https://dummyjson.com/products"

  getProducts(): Observable<ProductList> {
    return this.http.get<ProductList>(this.api)
  }
}
