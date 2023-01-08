import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {Injectable} from "@angular/core";
import {Contacto} from "./Contacto";

@Injectable()
export class ContactoService {

  private urlEndpoint: string = 'http://localhost:8080/api/contactos';
  private httpHeaders = new HttpHeaders({'content-type': 'application/json'})

  constructor(private http: HttpClient) {
  }

  enviar(contacto: Contacto): Observable<Contacto> {
    return this.http.post<Contacto>(this.urlEndpoint, contacto, {headers: this.httpHeaders});
  }
}

