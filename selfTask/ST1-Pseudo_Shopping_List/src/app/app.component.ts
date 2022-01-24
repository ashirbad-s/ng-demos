import { Component } from '@angular/core';
import { ShoppingListe } from './shopping-liste';

@Component({
  selector: 'app-root',
  templateUrl : './app.component.html',
})

export class AppComponent {
  show = true;
  usrname="";
    
 
 onClick()
 {
  this.show=false;
 }
}
