import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  name="Ashirbad"
  checkList?:any;
  showCollapse=false;
  showTemp=false;
  constructor
  (
    private location : Location
  ) { }

  ngOnInit(): void {
    console.log("The name variable is :"+this.name);
  }

  onClick()
  {
    this.showCollapse=!this.showCollapse;
  }

  showTempVar()
  {
    this.showTemp=!this.showTemp;
  }

  back()
  {
    this.location.back();
  }

}
