import {Component, OnInit} from '@angular/core';
import {ServicioService} from "../../servicio.service";
import {TokenServicio} from "../../servicio/token.servicio";

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  isLogger = false;
  proyectos: any[] = [];

  constructor(private _servicio: ServicioService, private tokenServicio: TokenServicio) {
    this.proyectos = _servicio.obtenerProyecto()
  }

  ngOnInit(): void {
    if (this.tokenServicio.getToken()) {
      this.isLogger = true;
    } else {
      this.isLogger = false;
    }
  }
}
