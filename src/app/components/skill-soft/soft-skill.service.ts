import { Injectable } from '@angular/core';
import {Soft} from "./Soft";
import {catchError, map, Observable, of, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class SoftSkillService {

  private urlEndpoint: string = 'http://localhost:8080/api/softskills';
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

  getSoft(idPersona: String): Observable<Soft[]> {
    return this.http.get(`${this.urlEndpoint}?id_persona=${idPersona}`).pipe(
      map((response) => response as Soft[]),
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }

  create(soft: Soft): Observable<Soft> {
    return this.http.post<Soft>(this.urlEndpoint, soft, {headers: this.httpHeaders})
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }

  getSoftEditado(id: number): Observable<Soft> {
    return this.http.get<Soft>(`${this.urlEndpoint}/${id}`)
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }

  update(soft: Soft): Observable<Soft> {
    return this.http.put<Soft>(`${this.urlEndpoint}/${soft.id}`, soft, {headers: this.httpHeaders})
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }

  delete(id: number | undefined): Observable<Soft> {
    return this.http.delete<Soft>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders})
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }
}
