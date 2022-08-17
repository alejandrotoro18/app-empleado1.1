import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListEmpleadosComponent } from '../../components/list-empleados/list-empleados.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,],
  declarations: [ AppComponent, HelloComponent,ListEmpleadosComponent,NavbarComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
