import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { estudiante } from 'src/app/entidades/estudiante';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario:estudiante= {} as estudiante;
  usuarios:any

  constructor(private http:HttpClient,private router:Router) { }


    //Agregar
    enviarPos():void{

      this.http.post<estudiante>('',this.usuario)
      .subscribe(response=>{
        console.log(response);
        this.usuario= {} as estudiante;
        window.location.reload();
      });
    }

    editar(id:number):void{
      console.log("el id es igual a = "+id);
      this.http.get<estudiante>(''+id)
        .subscribe(response=>{
          this.usuario=response;
        });
      }
    
    
      eliminar(id:number):void{
        console.log("el id es igual a = "+id);
        this.http.delete<estudiante>(''+id)
          .subscribe(response=>{
            //this.usuario=response;
            alert('Usuario eliminado');
            window.location.reload();
          });
      }
  




  ngOnInit(): void {
  }

}
