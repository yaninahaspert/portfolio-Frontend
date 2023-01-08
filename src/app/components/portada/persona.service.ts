import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {Persona} from "../acercademi/persona";

@Injectable()
export class PersonaService {
  private urlEndpoint: string = 'http://localhost:8080/api/personas';

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    return this.http.get(`${this.urlEndpoint}`).pipe(
      map((response) => response as Persona[])
    );
  }
}
