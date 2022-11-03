import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {TokenServicio} from "../../servicio/token.servicio";
import {AuthService} from "../../servicio/auth.service";
import {LoginUsuario} from "../../modal/login-usuario";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLoggingFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private ruta: Router, private tokenServicio: TokenServicio, private authServicio: AuthService) {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        contrasena: ['', [Validators.required, Validators.minLength(8)]],
      }
    )
  }

  ngOnInit(): void {
    if (this.tokenServicio.getToken()) {
      this.isLogged = true
      this.isLoggingFail = false;
      this.roles = this.tokenServicio.getAuthorities();
    }
  }

  get email() {
    return this.form.get('email');
  }

  get contrasena() {
    return this.form.get('contrasena');
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authServicio.login(this.loginUsuario)
      .subscribe(data => {
          this.isLogged = true;
          this.isLoggingFail = false;
          this.tokenServicio.setToken(data.token);
          this.tokenServicio.setUsername(data.nombreUsuario);
          this.tokenServicio.setAuthorities(data.authorities);
          this.roles = data.authorities;
          this.ruta.navigate(['/administrar']);
          window.location.reload();
        },
        err => {
          this.isLogged = false;
          this.isLoggingFail = true;
          this.errMsj = err.error.mensaje;
          console.log(this.errMsj);
        }
    );
  }
}
