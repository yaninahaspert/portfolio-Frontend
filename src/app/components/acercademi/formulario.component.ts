import {Component, OnInit} from '@angular/core';
import {Acercademi} from "./acercademi";
import {AcercademiService} from "./acercademi.service";
import {Router} from "@angular/router";
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public acercademi: Acercademi = new Acercademi()

  constructor(private acercademiService: AcercademiService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  public create(): void {
    this.acercademiService.create(this.acercademi)
      .subscribe(persona=> {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Agregado con éxito!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(["/"])
      }
    )

  }
}
