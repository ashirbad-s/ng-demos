import { Component, OnInit, Input } from '@angular/core';
import { DataBase } from '../../database';

@Component({
  selector: 'app-assignments',
  templateUrl: 'assignments.html',
  styleUrls: [ 'assignments.css' ]
})
export class AssignmentsComponent implements OnInit {

  @Input('id') id!:number;
  db=DataBase;
  constructor() { }

  

  ngOnInit(): void {
    
  }

}
