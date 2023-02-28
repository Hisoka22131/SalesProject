import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ApplicationService } from './services/application.service';
import { PropertiesService } from './services/properties.service';

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    PropertyCardComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [ApplicationService, PropertiesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
