import { Component, OnInit } from '@angular/core';
import {ServicioService} from "../../servicio.service";

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios:any[]=[];

  constructor(private _servicio: ServicioService) {
    this.estudios = _servicio.obtenerEstudio()
  }

  ngOnInit(): void {
  }

}
