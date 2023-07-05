import { Component, Input, OnInit } from '@angular/core';
import { ICustomer } from '../../ICustomer';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent {
  @Input() customer!: ICustomer
}
