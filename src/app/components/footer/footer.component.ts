import { Component, OnInit } from '@angular/core';
import {Red} from "../redes/Red";
import {TokenServicio} from "../../servicio/token.servicio";
import {Router} from "@angular/router";
import {RedesService} from "../redes/redes.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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

}
