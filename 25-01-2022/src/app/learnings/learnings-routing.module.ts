import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import {BasicsComponent} from './basics/basics.component';

const routes: Routes = 
[
  //{ path:"Basics", component:BasicsComponent, prefix:"Learnings" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningsRoutingModule { }
