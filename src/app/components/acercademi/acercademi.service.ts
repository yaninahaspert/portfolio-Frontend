import {Injectable} from "@angular/core";
import {Persona} from "./persona";
import {catchError, map, Observable, of, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()
export class AcercademiService {
  private urlEndpoint: string = 'http://localhost:8080/api/personas';
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

  getAcercademi(): Observable<Persona[]> {
    return this.http.get(this.urlEndpoint).pipe(
      map((response) => response as Persona[]),
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }

  create(acercademi: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.urlEndpoint, acercademi, {headers: this.httpHeaders})
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }

  getPersonaEditada(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.urlEndpoint}/${id}`)
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }

  update(acercademi: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.urlEndpoint}/${acercademi.id}`, acercademi, {headers: this.httpHeaders})
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }

  delete(id: number | undefined): Observable<Persona> {
    return this.http.delete<Persona>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders})
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }
}
