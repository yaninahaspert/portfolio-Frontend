import { Component, OnInit } from '@angular/core';
import {Persona} from "../acercademi/persona";
import {PersonaService} from "./persona.service";

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(personas => this.personas = personas);
  }

}
