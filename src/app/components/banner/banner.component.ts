import {Component, OnInit} from '@angular/core';
import {ServicioService} from "../../servicio.service";
import {Persona} from "../acercademi/persona";
import {AcercademiService} from "../acercademi/acercademi.service";
import Swal from "sweetalert2";
import {TokenServicio} from "../../servicio/token.servicio";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  isLogger = false;
  personas: Persona[] = [];

  constructor(private acercademiService: AcercademiService, private tokenServicio: TokenServicio) {

  }

  ngOnInit(): void {
    this.acercademiService.getAcercademi().subscribe(
      acercademi => this.personas = acercademi);
    if (this.tokenServicio.getToken()) {
      this.isLogger = true;
    } else {
      this.isLogger = false;
    }
    this.acercademiService.getAcercademi().subscribe(
      acercademi => this.personas = acercademi);
  }

  delete(acercademi: Persona): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¿Seguro que deseas elimanar los datos?",
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
