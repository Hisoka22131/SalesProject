import {HttpClient} from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {IProduct} from '../IProduct';
import {environment} from 'src/environments/environment.development'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  @ViewChild('Form') addProductForm!: NgForm;
  baseApiUrl: string = environment.baseUrl;
  productView: IProduct = {
    Id: null,
    productName: '',
    unitPrice: null,
    package: '',
    isDiscontinued: null
  };

  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit(Form: NgForm) {
    return this.http.post(this.baseApiUrl + '/product/CreateProduct', this.productView)
      .subscribe(data => console.log(data))
  }
}
