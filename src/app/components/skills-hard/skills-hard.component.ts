import {Component, Input, OnInit} from '@angular/core';
import {TokenServicio} from "../../servicio/token.servicio";
import Swal from "sweetalert2";
import {Hard} from "./Hard";
import {HardskillService} from "./hardskill.service";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";


@Component({
  selector: 'app-skills-hard',
  templateUrl: './skills-hard.component.html',
  styleUrls: ['./skills-hard.component.css']
})
export class SkillsHardComponent implements OnInit {
  @Input() idPersona: string = "";
  hards: Hard[] =[];
  isLogger = false;

  constructor(private tokenServicio: TokenServicio,
              private hardskillService: HardskillService) {
  }

  ngOnInit(): void {
    this.hardskillService.getHard(this.idPersona).subscribe(
      hard => this.hards = hard);

    if (this.tokenServicio.getToken()) {
      this.isLogger = true;
    } else {
      this.isLogger = false;
    }

  }
  delete(hard: Hard): void {
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
        this.hardskillService.delete(hard.id).subscribe(
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
    moveItemInArray(this.hards, event.previousIndex, event.currentIndex);
  }
}

