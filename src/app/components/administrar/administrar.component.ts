import { Component, OnInit } from '@angular/core';
import {Persona} from "../acercademi/persona";

@Component({
  selector: 'app-administrar',
  templateUrl: './administrar.component.html',
  styleUrls: ['./administrar.component.css']
})
export class AdministrarComponent implements OnInit {
  personas: Persona[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
