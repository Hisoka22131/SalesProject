import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { ICustomer } from '../../ICustomer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Array<ICustomer> = [];

  constructor(private custService: CustomerService) { }

  ngOnInit(): void {
    this.custService.getAllCustomers().subscribe(data =>{
      this.customers = data;
    })
  }

}
