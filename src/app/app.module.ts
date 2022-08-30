import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ExperinciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
