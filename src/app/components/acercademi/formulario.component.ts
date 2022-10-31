import {Component, OnInit} from '@angular/core';
import {Persona} from "./persona";
import {AcercademiService} from "./acercademi.service";
import {Router, ActivatedRoute} from "@angular/router";
import { NgForm } from '@angular/forms';
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
    this.llenarinputs()
  }
  llenarinputs():void{
    this.activateRouter.params.subscribe(params=>{
      let id=params['id']
      if(id){
        this.acercademiService.getPersonaEditada(id).subscribe((acercademi)=>this.acercademi=acercademi)
      }
    })
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

        setTimeout(() => {
          this.router.navigate(["/portada"])
        }, 1500);
      }
    )

  }
  update():void{
    this.acercademiService.update(this.acercademi).subscribe(acercademi =>{
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
