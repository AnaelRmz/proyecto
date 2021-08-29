import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './pages/registro/registro.component';
import { NotasComponent } from './pages/notas/notas.component';
import { PrincipalRoutingModule } from './principal-routing.module';


import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistroComponent,
    NotasComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    FormsModule
  ]
})
export class PrincipalModule { }
