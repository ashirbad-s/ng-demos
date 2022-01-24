import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

const routes: Routes = [
{ path:'checkout', component: NewComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NewComponentComponent,FirstComponentComponent,SignInPageComponent, ShoppingListComponent]