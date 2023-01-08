import { Component, OnInit } from '@angular/core';
import {Persona} from "../acercademi/persona";
import {Router} from "@angular/router";

@Component({
  selector: 'app-administrar',
  templateUrl: './administrar.component.html',
  styleUrls: ['./administrar.component.css']
})
export class AdministrarComponent implements OnInit {
  public acercademi: Persona = new Persona()

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public redireccionar(): void {
    this.router.navigate([`/portada/${window.sessionStorage.getItem('personaLogueadaId')}`]);
  }
}
