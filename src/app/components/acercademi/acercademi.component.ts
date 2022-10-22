import {Component, OnInit} from '@angular/core';
import {ServicioService} from "../../servicio.service";
import {Acercademi} from "./acercademi";
import {ACERCADEMI} from "./acercademi.json";
import {AcercademiService} from "./acercademi.service";

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {

  acercademi: Acercademi[] = [];

  constructor(private acercademiService: AcercademiService) {
    this.acercademiService.getAcercademi().subscribe(
    acercademi => this.acercademi = acercademi);
  }


  ngOnInit(): void {

  }

}
