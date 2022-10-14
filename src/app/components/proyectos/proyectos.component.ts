import { Component, OnInit } from '@angular/core';
import {ServicioService} from "../../servicio.service";

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos:any[]=[];

  constructor(private _servicio: ServicioService) {
    this.proyectos = _servicio.obtenerProyecto()
  }

  ngOnInit(): void {
  }

}
