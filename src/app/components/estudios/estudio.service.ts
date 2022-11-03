import { Injectable } from '@angular/core';
import {ESTUDIO} from "./estudio.json";
import {Estudio} from "./Estudio";
import {Observable, of} from "rxjs";
import {Experiencia} from "../experiencia/Experiencia";


@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  constructor() {}
    getEstudios():Observable<Estudio[]> {
    return of (ESTUDIO);
  }
  }

