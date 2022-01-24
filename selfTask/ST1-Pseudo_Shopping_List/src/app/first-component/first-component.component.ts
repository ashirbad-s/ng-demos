import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  title = 'Grocery Cart';
  @Input('usrnm') usrnme="";
 
  listOfItems=["FirstItem","SecondItem","ThirdItem"];
  ShoppingList:any[]=[];
  child :number = 0;  

  updateShoppingList(index:number,item:string)
  {
    let which=this.ShoppingList.length;
    let qnty=0;
    this.ShoppingList.push({id:index,name:item,quantity:qnty})
    console.warn(this.ShoppingList[which].name);
  }

 checkItOut()
 {
  console.warn("This is the CheckOut Function")
 }

  showToShoppingList()
  {
    this.child=this.ShoppingList.length;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
