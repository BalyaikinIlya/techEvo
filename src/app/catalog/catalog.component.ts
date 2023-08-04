import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  products: any[] = [];
  apiUrl: string = 'https://dummyjson.com/products?limit=50';
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts(this.apiUrl).subscribe((data) => {
      this.products = data.products;
      console.log(this.products);
    });
  }

  viewProductDetail(productId: number) {
    this.router.navigate(['/catalog', productId]);
  }
}
