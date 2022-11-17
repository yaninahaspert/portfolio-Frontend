import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {Soft} from "./Soft";
import {SoftSkillService} from "./soft-skill.service";


@Component({
  selector: 'app-formulario-soft',
  templateUrl: './formulario-soft.component.html',
  styleUrls: ['./formulario-soft.component.css']
})
export class FormularioSoftComponent implements OnInit {

  public soft: Soft = new Soft()

  constructor(private softSkillService: SoftSkillService,
              private router: Router,
              private activateRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.llenarinputs();
  }

  llenarinputs(): void {
    this.activateRouter.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.softSkillService.getSoftEditado(id).subscribe((soft) => {
          this.soft = soft;
        })
      }
    })
  }

  public create(): void {
    this.softSkillService.create(this.soft)
      .subscribe(persona => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡Agregado con éxito!',
            showConfirmButton: false,
            timer: 1500
          })

          setTimeout(() => {
            if (this.soft.idPersona) {
              this.router.navigate([`/portada/${this.soft.idPersona}`]);
            } else {
              this.router.navigate(["/portada"]);
            }
          }, 1500);
        }
      )
  }

  update(): void {
    this.softSkillService.update(this.soft).subscribe(estudio => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Editado con éxito!',
        showConfirmButton: false,
        timer: 1500
      })

      setTimeout(() => {
        if (this.soft.idPersona) {
          this.router.navigate([`/portada/${this.soft.idPersona}`]);
        } else {
          this.router.navigate(["/portada"]);
        }
      }, 1500);
    })
  }
}
