import { Component, OnInit, Input } from '@angular/core';
import { DataBase } from '../../database';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.html',
  styleUrls: [ 'dashboard.css' ]
})
export class DashboardComponent implements OnInit {

  @Input('id') id!:number;

  db=DataBase; 

  constructor() { }

  ngOnInit(): void {
   
  }

}
