import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
 
  @Input('notes') workList:any=[];
  @Input('deadLines') deadLineList:any=[];
  @Input('index') index:number=0;

  @Output() sendList = new EventEmitter();



  deleteNote(index:number)
  {
    this.workList.splice(index,1);
    this.sendList.emit(this.workList);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
