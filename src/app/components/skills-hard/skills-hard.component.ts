import { Component, OnInit } from '@angular/core';
import {TokenServicio} from "../../servicio/token.servicio";
import Swal from "sweetalert2";
import {Hard} from "./Hard";
import {HardskillService} from "./hardskill.service";

@Component({
  selector: 'app-skills-hard',
  templateUrl: './skills-hard.component.html',
  styleUrls: ['./skills-hard.component.css']
})
export class SkillsHardComponent implements OnInit {

  hards: Hard[] =[];
  isLogger = false;

  constructor(private tokenServicio: TokenServicio,
              private hardskillService: HardskillService) {
  }

  ngOnInit(): void {
    this.hardskillService.getHard().subscribe(
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
    })
  }
}

