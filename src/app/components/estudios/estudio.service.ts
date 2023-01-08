import { Injectable } from '@angular/core';
import {Estudio} from "./Estudio";
import {catchError, map, Observable, of, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  private urlEndpoint: string = 'http://localhost:8080/api/estudios';
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

  getEstudios(idPersona: string): Observable<Estudio[]> {
    return this.http.get(`${this.urlEndpoint}?id_persona=${idPersona}`).pipe(
      map((response) => response as Estudio[]),
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }

  create(estudio: Estudio): Observable<Estudio> {
    return this.http.post<Estudio>(this.urlEndpoint, estudio, {headers: this.httpHeaders})
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }

  getEstudioEditado(id: number): Observable<Estudio> {
    return this.http.get<Estudio>(`${this.urlEndpoint}/${id}`)
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }

  update(estudio: Estudio): Observable<Estudio> {
    return this.http.put<Estudio>(`${this.urlEndpoint}/${estudio.id}`, estudio, {headers: this.httpHeaders})
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }

  delete(id: number | undefined): Observable<Estudio> {
    return this.http.delete<Estudio>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders})
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }
}
