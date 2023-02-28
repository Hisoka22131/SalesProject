import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

 constructor(http: HttpClient){
  // http.get<Observable<any>[]>(environment.baseUrl + "/weatherforecast").subscribe(result => console.log(result))
 }
}
