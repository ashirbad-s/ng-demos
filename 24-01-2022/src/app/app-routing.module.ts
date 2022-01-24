import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

const routes: Routes = 
[
  {path : 'Heroes', component: HeroesComponent},
  {path : '', redirectTo:'/Dashboard', pathMatch:"full"},
  {path : 'Dashboard', component: DashboardComponent},
  {path : 'Details/:ID', component: HeroDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
