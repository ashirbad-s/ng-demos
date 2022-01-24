import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotesComponent } from './notes/notes.component';
import { NotesListService } from './notes-list.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NotesListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
