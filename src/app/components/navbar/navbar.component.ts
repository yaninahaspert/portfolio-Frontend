import {Component, OnInit} from '@angular/core';
import {TokenServicio} from "../../servicio/token.servicio";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogger = false;

  constructor(private tokenServicio: TokenServicio) {
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
    window.location.reload();
  }
}
