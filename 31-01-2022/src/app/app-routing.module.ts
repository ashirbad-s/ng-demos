import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AnimationPageComponent } from './animation-page/animation-page.component';
import { AppComponent } from './app.component';


const routes: Routes = 
[
  { path:'RegistrationPage' , component: RegistrationFormComponent},
  { path:'AnimationPage', component: AnimationPageComponent  },
  { path:'', redirectTo:'/Home', pathMatch:"full" },
  { path:'Home', component: AppComponent },
  { path:"**", component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
