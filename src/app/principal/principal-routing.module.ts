import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { NotasComponent } from './pages/notas/notas.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
    {
      path: '',
      children: [
        {path: '', redirectTo: '/principal', pathMatch: 'full'},
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
