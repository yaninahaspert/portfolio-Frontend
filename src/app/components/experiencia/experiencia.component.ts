import {Component, OnInit} from '@angular/core';
import {TokenServicio} from "../../servicio/token.servicio";
import Swal from "sweetalert2";
import {ExperienciaService} from "./experiencia.service";
import {Experiencia} from "./Experiencia";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

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
      title: '¿Estás seguro?',
      text: "¿Seguro que deseas eliminar los datos?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, ¡eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.experienciaService.delete(experiencia_.id).subscribe(
          response => {
            Swal.fire(
              '¡Eliminado!',
              'Los datos han sido eliminado con éxito.',
              'success'
            )
          }
        )
      }
    }).then(() => window.location.reload())

  }
  drop(event: CdkDragDrop<object[]>) {
    moveItemInArray(this.experiencias, event.previousIndex, event.currentIndex);
  }
}
