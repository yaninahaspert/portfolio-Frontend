import {Component, OnInit} from '@angular/core';
import {ServicioService} from "../../servicio.service";
import {Persona} from "./persona";
import {ACERCADEMI} from "./acercademi.json";
import {AcercademiService} from "./acercademi.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private acercademiService: AcercademiService) {

  }

  ngOnInit(): void {
    this.acercademiService.getAcercademi().subscribe(
      acercademi => this.personas = acercademi);
  }

  delete(acercademi: Persona): void{
  Swal.fire({
    title: 'Estas seguro?',
    text: "seguro que desea elimanar los datos",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'si, eliminar!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.acercademiService.delete(acercademi.id).subscribe(
        response=>{
          Swal.fire(
            'Eliminado!',
            'Los datos han sido eliminado con éxito.',
            'success'
          )
        }
      )

    }
  })
}
}
