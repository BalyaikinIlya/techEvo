import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  private productsUrl = 'https://dummyjson.com/products';

  getProducts(apiUrl: string): Observable<any> {
    return this.http.get<any>(apiUrl);
  }

  getProductById(id: number): Observable<any> {
    return this.http
      .get<any[]>(`${this.productsUrl}/${id}`)
      .pipe(map((response: any) => response));
  }
}
