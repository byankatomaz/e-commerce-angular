import { ProductCardComponent } from './../product-card/product-card.component';
import { ProductsService } from '../../../Service/products.service';
import { ProductList } from './../product';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: ProductList = { products: [] };

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: ProductList) => {
      this.products = data;
    });
  }
}
