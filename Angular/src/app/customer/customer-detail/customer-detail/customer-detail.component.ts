import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
public customerId: number;
  constructor(private route: ActivatedRoute, private router:Router) {
    //преобразуем в Number '+*'
    this.customerId = +this.route.snapshot.params['id']
   }

  ngOnInit() {
    //подписываемся для преобразования данных
    this.route.params.subscribe(
      (params) => {
        //меняем наш id при переходе на другие страницы (для onSelectNext())
        this.customerId = +params['id']
      })
  }

  onBack(){
    this.router.navigate(['/'])
  }

  onSelectNext(){
    this.customerId += 1;
    this.router.navigate(['customer-detail', this.customerId])
  }

}
