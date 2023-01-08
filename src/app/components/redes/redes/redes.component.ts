import {Component, Input, OnInit} from '@angular/core';
import {Red} from "../Red";
import Swal from "sweetalert2";
import {TokenServicio} from "../../../servicio/token.servicio";
import {ActivatedRoute, Router} from "@angular/router";
import {RedesService} from "../redes.service";

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  @Input() idPersona: string = "";
  isLogger = false;
  redes: Red[] =[];


  constructor(
    private tokenServicio: TokenServicio,
    private ruta: Router,
    private redService: RedesService,
    private activateRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(params => {
      this.redService.getRedes(this.idPersona).subscribe(redes => this.redes = redes);
    })
    if (this.tokenServicio.getToken()) {
      this.isLogger = true;
    } else {
      this.isLogger = false;
    }
  }
  delete(red: Red): void {
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
        this.redService.delete(red.id).subscribe(
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

}
