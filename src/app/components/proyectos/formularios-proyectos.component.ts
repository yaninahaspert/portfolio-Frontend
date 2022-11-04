import { Component, OnInit } from '@angular/core';
import {EstudioService} from "../estudios/estudio.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {Proyecto} from "./Proyecto";
import {ProyectoService} from "./proyecto.service";

@Component({
  selector: 'app-formularios-proyectos',
  templateUrl: './formularios-proyectos.component.html',
  styleUrls: ['./formularios-proyectos.component.css']
})
export class FormulariosProyectosComponent implements OnInit {

  public proyecto: Proyecto = new Proyecto()

  constructor(private proyectoService: ProyectoService,
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
        this.proyectoService.getProyectoEditado(id).subscribe((proyecto) => this.proyecto = proyecto)
      }
    })
  }

  public create(): void {
    this.proyectoService.create(this.proyecto)
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
    this.proyectoService.update(this.proyecto).subscribe(proyecto => {
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
