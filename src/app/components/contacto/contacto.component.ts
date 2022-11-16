import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {ContactoService} from "./contacto.service";
import {Experiencia} from "../experiencia/Experiencia";
import {Contacto} from "./Contacto";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public contacto: Contacto = new Contacto()

  constructor(private contactoService: ContactoService,
              private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(params => {
      this.contacto.id_persona = params['id']
    })
  }
  public enviar(): void {
    this.contactoService.enviar(this.contacto)
      .subscribe(persona => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Mensaje enviado con éxito!',
          showConfirmButton: false,
          timer: 1500
        })
      })
}
}
