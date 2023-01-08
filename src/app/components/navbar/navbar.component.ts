import {Component, OnInit} from '@angular/core';
import {TokenServicio} from "../../servicio/token.servicio";
import {ActivatedRoute, Router} from "@angular/router";
import {RedesService} from "../redes/redes.service";

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
    if (this.tokenServicio.getToken()) {
      this.isLogger = true;
    } else {
      this.isLogger = false;
    }
  }

  onLogOut(): void {
    this.tokenServicio.logOut();
    this.ruta.navigate(['/login']).then(() => window.location.reload())
  }


}
