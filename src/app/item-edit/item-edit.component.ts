import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-service.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService,
    private http: HttpClient,
  ) {}
  product: any;

  goBack(): void {
    this.location.back();
  }
  sendForm(){
    const body = { title:this.product.title,description:this.product.description,price:this.product.price,brand:this.product.brand,rating:this.product.rating,};
    this.http.put<any>(`https://dummyjson.com/products/${this.product.id}`, body)
        .subscribe({
            next: data => {
                console.log(data);
                console.log(this.product.id)
                this.location.back();
            },
            error: error => {
                
                console.error('There was an error!', error);
            }
        });
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
