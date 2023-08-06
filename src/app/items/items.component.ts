import { Component } from '@angular/core';
import { ProductService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  products: any[] = [];
  apiUrl: string = 'https://dummyjson.com/products?limit=50';
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts(this.apiUrl).subscribe((data) => {
      this.products = data.products;
      console.log(this.products);
    });
  }

  editProductDetail(productId: number) {
    this.router.navigate(['/admin/items', productId]);
  }
}
