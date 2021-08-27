import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './pages/registro/registro.component';
import { NotasComponent } from './pages/notas/notas.component';
import { PrincipalRoutingModule } from './principal-routing.module';



@NgModule({
  declarations: [
    RegistroComponent,
    NotasComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
  ]
})
export class PrincipalModule { }
