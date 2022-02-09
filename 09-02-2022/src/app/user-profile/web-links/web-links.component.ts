import { Component, OnInit, Input } from '@angular/core';
import { DataBase } from '../../database';

@Component({
  selector: 'app-web-links',
  templateUrl: 'web-links.html',
  styleUrls: [ 'web-links.css' ]
})
export class WebLinksComponent implements OnInit {

  @Input('id') id!:number;
  db=DataBase;
  constructor() { }

  ngOnInit(): void {
  }

}
