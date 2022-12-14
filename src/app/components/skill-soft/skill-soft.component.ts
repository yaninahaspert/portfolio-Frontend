import {Component, Input, OnInit} from '@angular/core';
import {TokenServicio} from "../../servicio/token.servicio";
import Swal from "sweetalert2";
import {Soft} from "./Soft";
import {SoftSkillService} from "./soft-skill.service";
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-skill-soft',
  templateUrl: './skill-soft.component.html',
  styleUrls: ['./skill-soft.component.css']
})
export class SkillSoftComponent implements OnInit {
  @Input() idPersona: string = "";
  softs: Soft[] =[];
  isLogger = false;

  constructor(private tokenServicio: TokenServicio,
              private softSkillService: SoftSkillService) {

  }

  ngOnInit(): void {
    this.softSkillService.getSoft(this.idPersona).subscribe(
      soft => this.softs = soft);

    if (this.tokenServicio.getToken()) {
      this.isLogger = true;
    } else {
      this.isLogger = false;
    }

  }
  delete(soft: Soft): void {
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
        this.softSkillService.delete(soft.id).subscribe(
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
    moveItemInArray(this.softs, event.previousIndex, event.currentIndex);
  }
}
