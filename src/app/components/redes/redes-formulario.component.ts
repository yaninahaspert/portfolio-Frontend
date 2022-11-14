import { Component, OnInit } from '@angular/core';
import {EstudioService} from "../estudios/estudio.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {Red} from "./Red";
import {RedesService} from "./redes.service";

@Component({
  selector: 'app-redes-formulario',
  templateUrl: './redes-formulario.component.html',
  styleUrls: ['./redes-formulario.component.css']
})
export class RedesFormularioComponent implements OnInit {

  public red: Red = new Red()

  constructor(private redService: RedesService,
              private router: Router,
              private activateRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  public create(): void {
    this.redService.create(this.red)
      .subscribe(persona => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡Agregado con éxito!',
            showConfirmButton: false,
            timer: 1500
          })

          setTimeout(() => {
            this.router.navigate(["/portada"]).then(() => window.location.reload())
          }, 1500);
        }
      )
  }

}
