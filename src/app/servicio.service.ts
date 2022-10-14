import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

estudios:any[]=[
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
  proyecto:any[]=[
    {
      nombre: "AGENDA TELÉFONICA",
      descripcion: "Agenda realizada en javascript vainilla y IndexDB. Funciones como drag and drop, agregar, editar y eliminar contactos de la base de datos uso de HTML5, CSS, Bootstrap.",
      imagen: "assets/images/agenda-removebg-preview.png",
    },
    {
      nombre: "PORTFOLIO WEB",
      descripcion: "Portfolio web realizado en AngularJS, Java y base de datos. Funciones modificar y eliminar datos personales",
      imagen: "assets/images/cv-removebg-preview.png",
    },
    {
      nombre: "TABLERO KAMBAN",
      descripcion: "Todo list realizado con javacript vainilla, html, css, bootstarp y api rest. Funciones como agregar,\n" +
        "          modificar, mover y eliminar tareas.",
      imagen: "assets/images/todolist.png",
    },
    {
      nombre: "DIARIO DIGITAL",
      descripcion: "Diario digital realizado en Vue.JS y api rest. Funciones como drag and drop, editar y eliminar articulos. Cargar, eliminar y mover publicidades.",
      imagen: "assets/images/125510.png",
    },
    {
      nombre: "Agenda telefónica",
      descripcion: "Agenda realizada en javascript y local Storage. Funciones agregar, editar y eliminar contactos.uso de HTML5, CSS, Bootstrap, javascript vainilla e IndexDB.",
      imagen: "assets/images/agenda-removebg-preview.png"
    },
  ]
  acerca_de_mi:any[]=[
    {
      nombre:"Yanina Haspert",
      descripcion: "Como Full Stack Developer cuento con una faceta integral y tengo conocimientos y herramientas que me permiten afrontar cualquiera de las etapas de un proyecto web. Me apasiona el Desarrollado Frontend. Aca me siento responsable de la interacción directa del usuario, por lo que mi desarrollo es enfocado al lado más visual de las aplicaciones, como el cuidado de colores, botones, enlaces, menús y todo lo que vemos en una página cuando estamos accediendo. Precisamente, como profesional frontend considero que tengo un ojo constante para la mejor experiencia de usuario",
    },
  ]
  banner:any[]=[
    {
      nombre: "Yanina Haspert",
      titulo: "Full Stack",
      descripcion: "Profesional que cuenta con diversas habildades informáticas, y que puede desenvolverse en el frontend y en el backend de un desarrollo web."
    }
  ]

  constructor() {
    console.log("funcionando servicio")
  }
  obtenerEstudio(){
  return this.estudios;
  }
  obtenerProyecto(){
  return this.proyecto;
  }
  obtenerAcerca_de_mi(){
  return this.acerca_de_mi;
  }
  obtenerBanner(){
  return this.banner;
  }
}
