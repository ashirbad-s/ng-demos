import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LearningsComponent } from './learnings/learnings.component';
import { TasksComponent } from './tasks/tasks.component';
import { SelfTasksComponent } from './self-tasks/self-tasks.component';
import { AppComponent } from './app.component';

import { BasicsComponent } from './learnings/basics/basics.component';
import { ComponentInteractionsComponent } from './learnings/component-interactions/component-interactions.component';
import { DirectivesComponent } from './learnings/directives/directives.component';
import { FormsComponent } from './learnings/forms/forms.component';
import { PipesComponent } from './learnings/pipes/pipes.component';
import { RoutingComponent } from './learnings/routing/routing.component';
import { ServicesComponent } from './learnings/services/services.component';

import { Task1Component } from './tasks/task1/task1.component';

import { ST1Component } from './self-tasks/st1/st1.component';
import { ST2Component } from './self-tasks/st2/st2.component';

const routes: Routes = 
[
  { path:"Home", component:AppComponent },
  { path:"", redirectTo:"/Home", pathMatch:"full" },

  
  { 
    path:"Learnings", component:LearningsComponent,
    children : 
    [
      { path:"Basics", component:BasicsComponent },
      { path:"ComponentInteractions", component:ComponentInteractionsComponent },
      { path:"Directives", component:DirectivesComponent },
      { path:"Forms", component:FormsComponent },
      { path:"Pipes", component:PipesComponent },
      { path:"Routing", component:RoutingComponent },
      { path:"Services", component:ServicesComponent },
    ] 
  },
  { 
    path:"Tasks", component:TasksComponent,
    children :
    [
      { path:"Task1", component:Task1Component }
    ]
  },
  
  {
     path:"Self_Tasks", component:SelfTasksComponent,
     children:
     [
       { path:"ST1", component:ST1Component },
       { path:"ST2", component:ST2Component }
     ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents =
[
  LearningsComponent,
  BasicsComponent,
  ComponentInteractionsComponent,
  DirectivesComponent,
  FormsComponent,
  PipesComponent,
  RoutingComponent,
  ServicesComponent,

  TasksComponent,
  Task1Component,

  SelfTasksComponent,
  ST1Component,
  ST2Component,
]