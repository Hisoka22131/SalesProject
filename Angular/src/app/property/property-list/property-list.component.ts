import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../../services/properties.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<IProperty> = [];

  constructor(private propService: PropertiesService) {}

  ngOnInit(): void {
    this.propService
      .getAllPeoperties().subscribe(data => {
        this.properties = data
      })
  }
}
