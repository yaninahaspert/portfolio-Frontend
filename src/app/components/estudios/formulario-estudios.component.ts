import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {Estudio} from "./Estudio";
import {EstudioService} from "./estudio.service";

@Component({
  selector: 'app-formulario-estudios',
  templateUrl: './formulario-estudios.component.html',
  styleUrls: ['./formulario-estudios.component.css']
})
export class FormularioEstudiosComponent implements OnInit {

  public estudio: Estudio = new Estudio()

  constructor(private estudioService: EstudioService,
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
        this.estudioService.getEstudioEditado(id).subscribe((estudio) => this.estudio = estudio)
      }
    })
  }

  public create(): void {
    this.estudioService.create(this.estudio)
      .subscribe(persona => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡Agregado con éxito!',
            showConfirmButton: false,
            timer: 1500
          })

          setTimeout(() => {
            this.router.navigate(["/portada"])
          }, 1500);
        }
      )
  }

  update(): void {
    this.estudioService.update(this.estudio).subscribe(estudio => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Editado con éxito!',
        showConfirmButton: false,
        timer: 1500
      })

      setTimeout(() => {
        this.router.navigate(["/portada"])
      }, 1500);
    })
  }
}
