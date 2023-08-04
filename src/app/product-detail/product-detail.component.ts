import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-service.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = +params['id'];
      this.productService.getProductById(productId).subscribe((product) => {
        this.product = product;
      });
    });
  }
}
