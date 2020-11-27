import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTodoComponent } from './lista-todo/lista-todo.component';
import { ItemTodoComponent } from './item-todo/item-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTodoComponent,
    ItemTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
