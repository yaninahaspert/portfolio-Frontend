import {Component, OnInit} from '@angular/core';
import {TokenServicio} from "../../servicio/token.servicio";
import {Router} from "@angular/router";
import {RedesService} from "../redes/redes.service";
import {Red} from "../redes/Red";
import {Estudio} from "../estudios/Estudio";
import Swal from "sweetalert2";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogger = false;
  redes: Red[] =[];

  constructor(private tokenServicio: TokenServicio,
              private ruta: Router,
              private redService: RedesService) {
  }

  ngOnInit(): void {
    this.redService.getRed().subscribe(
      red => this.redes = red);

    if (this.tokenServicio.getToken()) {
      this.isLogger = true;
    } else {
      this.isLogger = false;
    }
  }

  onLogOut(): void {
    this.tokenServicio.logOut();
    this.ruta.navigate(['/portada']).then(() => window.location.reload())

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
