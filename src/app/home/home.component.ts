import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  apiUrl: string = 'https://dummyjson.com/products?limit=10';
  constructor(private productService: ProductService, private router: Router) {}

  viewProductDetail(productId: number) {
    this.router.navigate(['/catalog', productId]);
  }

  ngOnInit(): void {
    this.productService.getProducts(this.apiUrl).subscribe((data) => {
      this.products = data.products;
      console.log(this.products);
    });
  }
}
