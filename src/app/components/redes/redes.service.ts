import { Injectable } from '@angular/core';
import {catchError, map, Observable, of, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Red} from "./Red";
import {Estudio} from "../estudios/Estudio";


@Injectable({
  providedIn: 'root'
})
export class RedesService {

  private urlEndpoint: string = 'http://localhost:8080/api/redes';
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

  getRed(): Observable<Red[]> {
    return this.http.get(this.urlEndpoint).pipe(
      map((response) => response as Red[]),
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }

  create(red: Red): Observable<Red> {
    return this.http.post<Red>(this.urlEndpoint, red, {headers: this.httpHeaders})
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }

  delete(id: number | undefined): Observable<Red> {
    return this.http.delete<Red>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders})
      .pipe(catchError(e => {
        debugger;
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }

}
