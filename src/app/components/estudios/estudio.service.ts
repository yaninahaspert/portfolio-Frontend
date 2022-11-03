import { Injectable } from '@angular/core';
import {ESTUDIO} from "./estudio.json";
import {Estudio} from "./Estudio";


@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  constructor() {}
    getEstudio(): Estudio[] {
    return ESTUDIO
  }
  }

