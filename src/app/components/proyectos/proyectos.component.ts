import {Component, OnInit} from '@angular/core';
import {TokenServicio} from "../../servicio/token.servicio";
import Swal from "sweetalert2";
import {Proyecto} from "./Proyecto";
import {ProyectoService} from "./proyecto.service";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  isLogger = false;
  proyectos: Proyecto[] = [];

  constructor(private proyetoService: ProyectoService,
              private tokenServicio: TokenServicio) {
  }

  ngOnInit(): void {
    this.proyetoService.getProyecto().subscribe(
      proyecto => this.proyectos = proyecto);

    if (this.tokenServicio.getToken()) {
      this.isLogger = true;
    } else {
      this.isLogger = false;
    }

  }

  delete(proyecto: Proyecto): void {
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
        this.proyetoService.delete(proyecto.id).subscribe(
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
    moveItemInArray(this.proyectos, event.previousIndex, event.currentIndex);
  }
}
