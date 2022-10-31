import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//servicios
 import {ServicioService} from './servicio.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercademiComponent } from './components/acercademi/acercademi.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { SkillsHardComponent } from './components/skills-hard/skills-hard.component';
import { SkillSoftComponent } from './components/skill-soft/skill-soft.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ExperinciaComponent } from './components/experincia/experincia.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {ContactoComponent} from "./components/contacto/contacto.component";
import {RouterModule, Routes} from "@angular/router";
import { AdministrarComponent } from './components/administrar/administrar.component';
import { BannerAdmComponent } from './components/componentsAdm/banner-adm/banner-adm.component';
import { AcercademiAdmComponent } from './components/componentsAdm/acercademi-adm/acercademi-adm.component';
import { EstudiosAdmComponent } from './components/componentsAdm/estudios-adm/estudios-adm.component';
import { ProyectosAdmComponent } from './components/componentsAdm/proyectos-adm/proyectos-adm.component';
import { ExperieniaAdmComponent } from './components/componentsAdm/experienia-adm/experienia-adm.component';
import { SoftSkillAdmComponent } from './components/componentsAdm/soft-skill-adm/soft-skill-adm.component';
import { HardSkillAdmComponent } from './components/componentsAdm/hard-skill-adm/hard-skill-adm.component';
import {HttpClientModule} from "@angular/common/http";
import {AcercademiService} from "./components/acercademi/acercademi.service";
import { FormularioComponent } from './components/acercademi/formulario.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormularioBannerComponent } from './components/banner/formulario-banner.component';
import { FormularioEstudiosComponent } from './components/estudios/formulario-estudios.component';
import { FormularioExperienciaComponent } from './components/experincia/formulario-experiencia.component';
import { FormulariosProyectosComponent } from './components/proyectos/formularios-proyectos.component';
import { FormularioSoftComponent } from './components/skill-soft/formulario-soft.component';
import {interceptorProvider} from "./servicio/interceptor";


const appRoutes:Routes=[
  {
    path: 'portada',
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'administrar',
    component: AdministrarComponent
  },
  {
    path:'contacto',
    component: ContactoComponent,
  },
  {
    path:'formulario',
    component: FormularioComponent,
  },
  {
    path:'formulario/:id',
    component: FormularioComponent,
  },
  {
    path:'**',
    component: PageNotFoundComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    AcercademiComponent,
    EstudiosComponent,
    SkillsHardComponent,
    SkillSoftComponent,
    FooterComponent,
    ProyectosComponent,
    ExperinciaComponent,
    PageNotFoundComponent,
    HomeComponent,
    LoginComponent,
    AdministrarComponent,
    BannerAdmComponent,
    AcercademiAdmComponent,
    EstudiosAdmComponent,
    ProyectosAdmComponent,
    ExperieniaAdmComponent,
    SoftSkillAdmComponent,
    HardSkillAdmComponent,
    FormularioComponent,
    FormularioBannerComponent,
    FormularioEstudiosComponent,
    FormularioExperienciaComponent,
    FormulariosProyectosComponent,
    FormularioSoftComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [
    interceptorProvider,
    ServicioService,
    AcercademiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
