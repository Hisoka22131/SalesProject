import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ICustomer } from '../customer/ICustomer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  // URL нашего сервера(должен быть запущен, для работы протоколов)
  baseApiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<ICustomer[]> {
    //возвращаем список Customer'ов и подписываемся для преобразования данных
    //не прописываем в () 'Get..', т к this.http.get() сам понимает, что в API контроллере нужен 'Get..' метод
    return this.http
      .get(this.baseApiUrl + '/customer')
      .pipe(
        map((data) => {
          const customersArray: Array<ICustomer> = [];
          for (const id in data) {
            //проверяем на наличие id и пушим в массив
            if (data.hasOwnProperty(id)) customersArray.push(data[id]);
          }
          return customersArray;
        })
      );
  }
}
