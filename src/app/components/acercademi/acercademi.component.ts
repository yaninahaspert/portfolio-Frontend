import { Component, OnInit } from '@angular/core';
import {ServicioService} from "../../servicio.service";

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
  acerca_de_mi:any[]=[];

  constructor(private _servicio: ServicioService) {
    this.acerca_de_mi = _servicio.obtenerAcerca_de_mi()
  }


  ngOnInit(): void {
  }

}
