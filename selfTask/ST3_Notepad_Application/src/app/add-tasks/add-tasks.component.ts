import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {
  message="";
  deadLine:any=new Date();
  working=false;
  todayDate=new Date().toDateString(); 
  workList:any[]=[];
  deadLineList:any[]=[];
  today:string=this.dateSet();
  

  dateSet()
  {
    let month= new Date().getMonth()+1;
    let mnth="";
    (month<=9)?mnth+="0"+month : mnth+=month;
    return ( new Date().getFullYear() ) +"-"
            + mnth +"-"
            +( new Date().getDate() );
  }

  addTask(task:string,deadLine:Date)  
  {
    this.workList.push(task);
    this.deadLineList.push(deadLine);
    this.message="";
    this.deadLine="";
   }

  allClear()
  {
    this.workList=[];
    this.deadLineList=[];
  }

  constructor() { }

  ngOnInit(): void 
  {

  }

}
