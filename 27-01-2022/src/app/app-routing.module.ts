import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = 
[
  {path:"Home", component:HomeComponent},
  { path:"LogOut", component:LogoutComponent},
  { path:"Profile", component: ProfileComponent},
  {path:"**", component:HomeComponent},
  {path:"",redirectTo:"/Home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
