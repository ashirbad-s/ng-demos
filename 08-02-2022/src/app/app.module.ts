import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DashboardComponent } from './user-profile/dashboard/dashboard.component';
import { WebLinksComponent } from './user-profile/web-links/web-links.component';
import { UserDetailsComponent } from './user-profile/user-details/user-details.component';
import { AssignmentsComponent } from './user-profile/assignments/assignments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    DashboardComponent,
    WebLinksComponent,
    UserDetailsComponent,
    AssignmentsComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
