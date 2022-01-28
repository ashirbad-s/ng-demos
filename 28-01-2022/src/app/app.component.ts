import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls : ["./app.component.css"]
})
export class AppComponent {
  date = '28-01-2022';
  name?:string;
  email?:string;
  pass?:string;
  tel?:number;
  submit:boolean=false;
 
  ngOnInit()
  {
    console.log(this.name);
  }

  onClick()
  {
    console.log(this.tel);
    this.submit=true;
  }
}
