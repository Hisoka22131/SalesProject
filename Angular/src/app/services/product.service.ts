import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IProduct } from '../product/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseApiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.http
      .get(this.baseApiUrl + '/product')
      .pipe(
        map((data) => {
          const productsArray: Array<IProduct> = [];
          for (const id in data) {
            if (data.hasOwnProperty(id)) productsArray.push(data[id]);
          }
          return productsArray;
        })
      );
  }
}
