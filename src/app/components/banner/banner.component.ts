import {Component, Input, OnInit} from '@angular/core';
import {Persona} from "../acercademi/persona";
import {AcercademiService} from "../acercademi/acercademi.service";
import Swal from "sweetalert2";
import {TokenServicio} from "../../servicio/token.servicio";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() idPersona: string = "";
  idPersona_: string = "";
  isLogger = false;
  personas: Persona[] = [];

  constructor(private acercademiService: AcercademiService, private tokenServicio: TokenServicio,private activateRouter: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.acercademiService.getAcercaDeMi(this.idPersona).subscribe(
      acercademi => this.personas = [acercademi]);
    if (this.tokenServicio.getToken()) {
      this.isLogger = true;
    } else {
      this.isLogger = false;
    }
    this.activateRouter.params.subscribe(params => {
      this.idPersona_ = params['id']
    })
  }

  delete(acercademi: Persona): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¿Seguro que deseas eliminar los datos?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, ¡Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.acercademiService.delete(acercademi.id).subscribe(
          response => {
            Swal.fire(
              '¡Eliminado!',
              'Los datos han sido eliminado con éxito.',
              'success'
            )
          }
        )
      }
    })
  }

}
