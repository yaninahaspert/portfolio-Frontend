import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

servicio:any[]=[
  {
    institucion: "FASTA inmaculada concepción",
    direccion: "Saenz Peña 1151",
    provincia: "San Francisco, Córdoba",
    telefono: "(03564) 42-4556",
    titulo: "Técnico superior en Trabajo Social",
    duracion: "4 años",
    anio: "2013",
    imagen: "../assets/images/fasta.png",
  },
  {
    institucion: "UNIVERSIDAD NACIONAL DE VILLA MARÍA",
    direccion: "A. Jauretche 1555",
    provincia: "Villa María, Córdoba",
    telefono: "(0353) 4539103",
    titulo: "LICENCIADA EN TRABAJO SOCIAL",
    duracion: "2 años",
    anio: "2018",
    imagen: "../assets/images/unvm-removebg-preview.png"
  },
  {
    institucion: "UNIVERSIDAD NACIONAL DE CÓRDOBA",
    direccion: "Avenida Valparaíso s/n",
    provincia: "Córdoba, Córdoba",
    telefono: "(03564) 42-4556",
    titulo: "Seminario: La intervención profesional en consejería de salud sexual reproductiva",
    duracion: "6 meses",
    anio: "2018",
    imagen: "../assets/images/logo_unc_small.jpg"
  },
  {
    institucion: "UNIVERSIDAD NACIONAL DE CÓRDOBA",
    direccion: "Avenida Valparaíso s/n",
    provincia: "Córdoba, Córdoba",
    telefono: "(03564) 42-4556",
    titulo: "Curso de postgrado: Construyendo aportes desde las Prácticas Profesionales de T.S. en el campo de la Salud Pública",
    duracion: "6 meses",
    anio: "2018",
    imagen: "../assets/images/logo_unc_small.jpg"
  },
  {
    institucion: "UDEMY",
    direccion: "Udemy.com.ar",
    provincia: "",
    telefono: "",
    titulo: "Vue.js3",
    duracion: "43 horas",
    anio: "2022",
    imagen: "../assets/images/udemy-3.svg",
    instructor: "instructor: ignacio bluuweb"
  },

  {
    institucion: "UDEMY",
    direccion: "Udemy.com.ar",
    provincia: "",
    telefono: "",
    titulo: "Curso: JavaScript Moderno Guía Definitiva Construye +15 Proyectos",
    duracion: "46.5 horas",
    anio: "2022",
    imagen: "../assets/images/udemy-3.svg",
    instructor: "instructor:Instructor: Juan Pablo De la torre Valdez"
  },
  {
    institucion: "UDEMY",
    direccion: "Udemy.com.ar",
    provincia: "",
    telefono: "",
    titulo: "Curso: Bootstrap 5 desde cero + HTML, CSS, Flexbox, Sass, GIT, JS!",
    duracion: "0 horas",
    anio: "2022",
    imagen: "../assets/images/udemy-3.svg",
    instructor: ""
  },
  {
    institucion: "MINISTERIO DE DESARROLLO PRODUCTIVO",
    direccion: "INTI",
    provincia: "SECCI ARGENTINA",
    telefono: "",
    titulo: "Primera etapa del plan Progarma Argentina: #SéProgramar",
    duracion: "60 horas",
    anio: "2022",
    imagen: "../assets/images/LOGO_ARGPROG-removebg-preview.png",
    instructor: ""
  }

]

  constructor() {
    console.log("funcionando servicio")
  }
  obtenerServicio(){
  return this.servicio;
  }
}
