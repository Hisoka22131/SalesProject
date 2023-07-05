import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {ICustomer} from "../ICustomer";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  @ViewChild('Form') addCustomerForm!: NgForm;
  entity: ICustomer = {
    id: null,
    firstName: "",
    lastName: "",
    fullName: "",
    city: "",
    country: "",
    phone: "",
    ordersCount: null
  }

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onBack() {
    this.router.navigate(['/'])
  }

  onSubmit(Form: NgForm) {
    // console.log(this.addCustomerForm)
  }
}
