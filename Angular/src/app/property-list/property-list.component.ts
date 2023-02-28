import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})

export class PropertyListComponent implements OnInit{
  properties: Array<any> = [
    {
      Id: 1,
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 2,
      Type: 'House',
      Price: 21312,
    },
    {
      Id: 3,
      Type: 'House',
      Price: 124421,
    },
    {
      Id: 4,
      Type: 'House',
      Price: 213552,
    },
    {
      Id: 1,
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 2,
      Type: 'House',
      Price: 21312,
    },
    {
      Id: 3,
      Type: 'House',
      Price: 124421,
    },
    {
      Id: 4,
      Type: 'House',
      Price: 213552,
    }
  ];

  ngOnInit(): void {
  }
}
