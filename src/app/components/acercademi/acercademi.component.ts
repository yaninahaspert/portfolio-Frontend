import {Component, OnInit} from '@angular/core';
import {Persona} from "./persona";
import {AcercademiService} from "./acercademi.service";
import Swal from "sweetalert2";
import {TokenServicio} from "../../servicio/token.servicio";


@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {

  personas: Persona[] = [];
  isLogger = false;

  constructor(private acercademiService: AcercademiService,
              private tokenServicio: TokenServicio) {
  }

  ngOnInit(): void {
    this.acercademiService.getAcercademi().subscribe(
      acercademi => this.personas = acercademi);
    if (this.tokenServicio.getToken()) {
      this.isLogger = true;
    } else {
      this.isLogger = false;
    }
  }

  delete(acercademi: Persona): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¿Seguro que deseas elimanar los datos",
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
