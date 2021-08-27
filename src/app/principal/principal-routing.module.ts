import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { NotasComponent } from './pages/notas/notas.component';

const routes: Routes = [
    {
      path: '',
      children: [
       { path: 'registro', component: RegistroComponent },
       { path: 'notas', component: NotasComponent},
       { path: '**', redirectTo: 'principal'}
      ]
    }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ]
})
export class PrincipalRoutingModule { }
