import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  message:string[] = []

  getMessage(msg:string)
  {
    this.message.push(msg);
  }

  allClear()
  {
    this.message=[];
  }
  constructor() { }
}
