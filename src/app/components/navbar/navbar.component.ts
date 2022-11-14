import {Component, OnInit} from '@angular/core';
import {TokenServicio} from "../../servicio/token.servicio";
import {ActivatedRoute, Router} from "@angular/router";
import {RedesService} from "../redes/redes.service";
import {Red} from "../redes/Red";
import Swal from "sweetalert2";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogger = false;

  constructor(
    private tokenServicio: TokenServicio,
    private ruta: Router,
    private redService: RedesService,
    private activateRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

  onLogOut(): void {
    this.tokenServicio.logOut();
    this.ruta.navigate(['/portada']).then(() => window.location.reload())

  }


}
