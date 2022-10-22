
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AutenticacionService} from "../../servicio/autenticacion.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private autenticacionServicio: AutenticacionService, private ruta: Router) {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        contrasena: ['', [Validators.required, Validators.minLength(8)]],
      }
    )
  }

  ngOnInit(): void {
  }
  get email() {
    return this.form.get('email');
  }

  get contrasena() {
    return this.form.get('contrasena');
  }
  onEnviar(event: Event) {
    event.preventDefault;
    this.autenticacionServicio.Iniciarsesion(this.form.value).subscribe((data: any) => {
      console.log("DATA:" + JSON.stringify(data))
      this.ruta.navigate(["/formulario"])
    })
  }
}
