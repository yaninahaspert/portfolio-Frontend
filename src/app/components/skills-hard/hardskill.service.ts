import { Injectable } from '@angular/core';
import {catchError, map, Observable, of, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Hard} from "./Hard";


@Injectable({
  providedIn: 'root'
})
export class HardskillService {

  private urlEndpoint: string = 'http://localhost:8080/api/hardskills';
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

  getHard(): Observable<Hard[]> {
    return this.http.get(this.urlEndpoint).pipe(
      map((response) => response as Hard[]),
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }

  create(hard: Hard): Observable<Hard> {
    return this.http.post<Hard>(this.urlEndpoint, hard, {headers: this.httpHeaders})
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }

  getHardEditado(id: number): Observable<Hard> {
    return this.http.get<Hard>(`${this.urlEndpoint}/${id}`)
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }

  update(hard: Hard): Observable<Hard> {
    return this.http.put<Hard>(`${this.urlEndpoint}/${hard.id}`, hard, {headers: this.httpHeaders})
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }

  delete(id: number | undefined): Observable<Hard> {
    return this.http.delete<Hard>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders})
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }
}
