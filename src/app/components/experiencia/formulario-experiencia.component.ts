import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Experiencia} from "./Experiencia";
import {AcercademiService} from "../acercademi/acercademi.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ExperienciaService} from "./experiencia.service";


@Component({
  selector: 'app-formulario-experiencia',
  templateUrl: './formulario-experiencia.component.html',
  styleUrls: ['./formulario-experiencia.component.css']
})
export class FormularioExperienciaComponent implements OnInit {
public experiencia_: Experiencia= new Experiencia()
  constructor(private experienciaService: ExperienciaService,
              private router: Router,
              private activateRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.llenarinputs()
  }
  llenarinputs():void{
    this.activateRouter.params.subscribe(params=>{
      let id=params['id']
      if(id){
        this.experienciaService.getExperienciaEditada(id).subscribe((experiencia_)=>this.experiencia_=experiencia_)
      }
    })
  }

  public create(): void {
    this.experienciaService.create(this.experiencia_)
      .subscribe(persona=> {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡Agregado con éxito!',
            showConfirmButton: false,
            timer: 1500
          })

          setTimeout(() => {
            this.router.navigate(["/portada"])
          }, 1500);
        }
      )

  }
  update():void{
    this.experienciaService.update(this.experiencia_).subscribe(experiencia_ =>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Editado con éxito!',
        showConfirmButton: false,
        timer: 1500
      })

      setTimeout(() => {
        this.router.navigate(["/portada"])
      }, 1500);
    })
  }
}
