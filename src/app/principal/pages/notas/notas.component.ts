import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { estudiante } from 'src/app/entidades/estudiante';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  usuario:estudiante= {} as estudiante;
  usuarios:any

  public respuesta:any;
  constructor(private http:HttpClient,private router:ActivatedRoute) { 
    http.get('https://api-unab.herokuapp.com/estudiantes')
    .subscribe(response=>{
      this.respuesta=response;
      console.log(this.respuesta);
    });
  }


  ngOnInit(): void {
  }

}
