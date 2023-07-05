import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Routes, RouterModule } from '@angular/router';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ButtonsModule} from 'ngx-bootstrap/buttons';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ApplicationService } from './services/application.service';
import { PropertiesService } from './services/properties.service';
import { AddPropertyComponent } from './property/add-property/add-property/add-property.component';
import { CustomerCardComponent } from './customer/customer-card/customer-card/customer-card.component';
import { CustomerListComponent } from './customer/customer-list/customer-list/customer-list.component';
import { HomePageComponent } from './homePage/home-page/home-page.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail/customer-detail.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { CustomerService } from './services/customer.service';
import { UserService } from './services/user.service';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { AddProductComponent } from './product/add-product/add-product.component';

const appRoutes: Routes = [
  //хом
  { path: '', component: HomePageComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'customer-detail/:id', component: CustomerDetailComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'user/login', component: UserLoginComponent },
  { path: 'user/register', component: UserRegisterComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'add-product', component: AddProductComponent },
  //если вводим рандомную строку
  { path: '**', component: HomePageComponent },
];

@NgModule({
  //сюда добавляем все компоненты
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    PropertyCardComponent,
    NavBarComponent,
    AddPropertyComponent,
    CustomerCardComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    HomePageComponent,
    FooterComponentComponent,
    AddCustomerComponent,
    UserRegisterComponent,
    UserLoginComponent,
    ProductCardComponent,
    ProductListComponent,
    AddProductComponent
  ],
  //импорты
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
  ],
  providers: [
    ApplicationService,
    PropertiesService,
    CustomerService,
    UserService,
    AlertifyService,
    AuthService,
    ProductService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
