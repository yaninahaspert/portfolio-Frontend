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

const appRoutes:Routes=[
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'contacto',
    component: ContactoComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [
    ServicioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
