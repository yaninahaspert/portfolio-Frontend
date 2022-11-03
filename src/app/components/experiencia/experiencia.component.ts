import {Component, OnInit} from '@angular/core';
import {TokenServicio} from "../../servicio/token.servicio";
import Swal from "sweetalert2";
import {ExperienciaService} from "./experiencia.service";

import {Experiencia} from "./Experiencia";

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias: Experiencia[] = [];
  isLogger = false;

  constructor(private tokenServicio: TokenServicio,
              private experienciaService: ExperienciaService) {
  }

  ngOnInit(): void {
    this.experienciaService.getExperiencia().subscribe(
      experiencia_ => this.experiencias = experiencia_);

    this.isLogger = !!this.tokenServicio.getToken();
  }

  delete(experiencia_: Experiencia): void {
    Swal.fire({
      title: 'Estas seguro?',
      text: "seguro que desea elimanar los datos",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.experienciaService.delete(experiencia_.id).subscribe(
          response => {
            Swal.fire(
              'Eliminado!',
              'Los datos han sido eliminado con éxito.',
              'success'
            )
          }
        )
      }
    })
  }
}

