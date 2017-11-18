import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';
import { RouterModule, Routes } from '@angular/router';


const routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
   { path: 'todos/:id', component: TodosComponent },
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UsersModule,
    TodosModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }