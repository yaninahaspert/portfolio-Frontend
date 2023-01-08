import { Component, OnInit } from '@angular/core';
import {EstudioService} from "../estudios/estudio.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {Hard} from "./Hard";
import {HardskillService} from "./hardskill.service";

@Component({
  selector: 'app-formulario-hard',
  templateUrl: './formulario-hard.component.html',
  styleUrls: ['./formulario-hard.component.css']
})
export class FormularioHardComponent implements OnInit {

  public hard: Hard = new Hard()

  constructor(private hardskillService: HardskillService,
              private router: Router,
              private activateRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.llenarinputs()
  }

  llenarinputs(): void {
    this.activateRouter.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.hardskillService.getHardEditado(id).subscribe((hard) => this.hard = hard)
      }
    })
  }

  public create(): void {
    this.hardskillService.create(this.hard)
      .subscribe(persona => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡Agregado con éxito!',
            showConfirmButton: false,
            timer: 1500
          })

        setTimeout(() => {
          if (this.hard.idPersona) {
            this.router.navigate([`/portada/${this.hard.idPersona}`]);
          } else {
            this.router.navigate(["/portada"]);
          }
        }, 1500);
        }
      )
  }

  update(): void {
    this.hardskillService.update(this.hard).subscribe(hard => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Editado con éxito!',
        showConfirmButton: false,
        timer: 1500
      })

      setTimeout(() => {
        if (this.hard.idPersona) {
          this.router.navigate([`/portada/${this.hard.idPersona}`]);
        } else {
          this.router.navigate(["/portada"]);
        }
      }, 1500);
    })
  }
}
