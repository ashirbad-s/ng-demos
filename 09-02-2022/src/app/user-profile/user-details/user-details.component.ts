import { Component, OnInit, Input } from '@angular/core';
import { DataBase } from '../../database';

@Component({
  selector: 'app-user-details',
  templateUrl: 'user-details.html',
  styleUrls: [ 'user-details.css' ]
})
export class UserDetailsComponent implements OnInit {

  @Input('id') id!:number;
  db=DataBase;
  constructor() { }

  ngOnInit(): void {
  }

}
