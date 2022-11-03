import {Component, OnInit} from '@angular/core';
import {ServicioService} from "../../servicio.service";
import {TokenServicio} from "../../servicio/token.servicio";
import {Estudio} from "./Estudio";
import {ESTUDIO} from "./estudio.json";
import {EstudioService} from "./estudio.service";

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
estudios: Estudio[] | undefined;
  isLogger = false;

  constructor(private tokenServicio: TokenServicio,
              private estudioService: EstudioService) {

  }

  ngOnInit(): void {
    if (this.tokenServicio.getToken()) {
      this.isLogger = true;
    } else {
      this.isLogger = false;
    }
    this.estudios=this.estudioService.getEstudio();
  }

}
