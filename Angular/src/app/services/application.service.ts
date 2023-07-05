import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {

  baseApiUrl: string = environment.baseUrl;
  methodUrl: string = "";

  constructor(private http: HttpClient) {}

  // getEntity(){
  //   this.http.get<Observable<any>>(this.baseApiUrl + this.methodUrl).subscribe(entity =>
  //     return entity)
  // }
}
