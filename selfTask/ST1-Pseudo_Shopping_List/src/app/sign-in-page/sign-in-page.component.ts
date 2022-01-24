import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  @Input() username="";
  constructor() { }

  ngOnInit(): void {
  }

}
