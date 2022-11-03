import {Component, OnInit} from '@angular/core';
import {TokenServicio} from "../../servicio/token.servicio";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogger = false;

  constructor(private tokenServicio: TokenServicio, private ruta: Router) {
  }

  ngOnInit(): void {
    if (this.tokenServicio.getToken()) {
      this.isLogger = true;
    } else {
      this.isLogger = false;
    }
  }

  onLogOut(): void {
    this.tokenServicio.logOut();
    this.ruta.navigate(['/portada']);
    window.location.reload();


  }
}
