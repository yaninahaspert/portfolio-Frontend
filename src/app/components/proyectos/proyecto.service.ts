import { Injectable } from '@angular/core';
import {Proyecto} from "./Proyecto";
import {catchError, map, Observable, of, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private urlEndpoint: string = 'http://localhost:8080/api/proyectos';
  private httpHeaders = new HttpHeaders({'content-type': 'application/json'})

  constructor(private http: HttpClient,
              private router: Router) {
  }

  private isNoAutorizado(e: any): boolean {
    if (e.status == 401 || e.status == 403) {
      this.router.navigate(["/login"])
      return true;
    }
    return false;
  }

  getProyecto(idPersona:String): Observable<Proyecto[]> {
    return this.http.get(`${this.urlEndpoint}?id_persona=${idPersona}`).pipe(
      map((response) => response as Proyecto[]),
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }

  create(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(this.urlEndpoint, proyecto, {headers: this.httpHeaders})
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }

  getProyectoEditado(id: number): Observable<Proyecto> {
    return this.http.get<Proyecto>(`${this.urlEndpoint}/${id}`)
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }

  update(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(`${this.urlEndpoint}/${proyecto.id}`, proyecto, {headers: this.httpHeaders})
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }

  delete(id: number | undefined): Observable<Proyecto> {
    return this.http.delete<Proyecto>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders})
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }
}
