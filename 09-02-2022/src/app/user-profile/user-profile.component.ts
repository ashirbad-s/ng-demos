import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.html',
  styleUrls: [ 'user-profile.css' ]
})
export class UserProfileComponent implements OnInit {

  id:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
