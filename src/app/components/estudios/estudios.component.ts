import {Component, Input, OnInit} from '@angular/core';
import {TokenServicio} from "../../servicio/token.servicio";
import {Estudio} from "./Estudio";
import {EstudioService} from "./estudio.service";
import Swal from "sweetalert2";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  @Input() idUsuario: string = "";
  estudios: Estudio[] = [];
  isLogger = false;

  constructor(private tokenServicio: TokenServicio,
              private estudioService: EstudioService) {

  }

  ngOnInit(): void {
    this.estudioService.getEstudios(this.idUsuario).subscribe(estudios => this.estudios = estudios);

    if (this.tokenServicio.getToken()) {
      this.isLogger = true;
    } else {
      this.isLogger = false;
    }

  }

  delete(estudio: Estudio): void {
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
        this.estudioService.delete(estudio.id).subscribe(
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
    moveItemInArray(this.estudios, event.previousIndex, event.currentIndex);
  }
}
