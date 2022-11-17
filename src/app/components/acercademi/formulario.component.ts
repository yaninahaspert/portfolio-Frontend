import {Component, OnInit} from '@angular/core';
import {Persona} from "./persona";
import {AcercademiService} from "./acercademi.service";
import {Router, ActivatedRoute} from "@angular/router";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public acercademi: Persona = new Persona()

  constructor(private acercademiService: AcercademiService,
              private router: Router,
              private activateRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(params => {
      this.acercademi.id = params['id'];
      this.llenarinputs();
    })
  }

  llenarinputs(): void {
    if (this.acercademi.id) {
      this.acercademiService.getPersonaEditada(this.acercademi.id)
        .subscribe((acercademi) => this.acercademi = acercademi)
    }
  }

  public create(): void {
    if (! this.acercademi.id) {
      this.acercademiService.create(this.acercademi)
        .subscribe(persona => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: '¡Agregado con éxito!',
              showConfirmButton: false,
              timer: 1500
            })

            setTimeout(() => {
              this.router.navigate([`/portada/${this.acercademi.id}`])
            }, 1500);
          }
        )
    } else {
      this.acercademiService.update(this.acercademi)
        .subscribe(persona => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: '¡Agregado con éxito!',
              showConfirmButton: false,
              timer: 1500
            })

            setTimeout(() => {
              this.router.navigate([`/portada/${this.acercademi.id}`])
            }, 1500);
          }
        )
    }


  }

  update(): void {
    this.acercademiService.update(this.acercademi).subscribe(acercademi => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Editado con éxito!',
        showConfirmButton: false,
        timer: 1500
      })

      setTimeout(() => {
        this.router.navigate([`/portada/${this.acercademi.id}`])
      }, 1500);
    })
  }
}
