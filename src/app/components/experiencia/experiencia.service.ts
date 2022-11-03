
import {Injectable} from "@angular/core";
import {Experiencia} from "./Experiencia";
import {catchError, map, Observable, of, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()
export class ExperienciaService {
  private urlEndpoint: string = 'http://localhost:8080/api/experiencias';
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

  getExperiencia(): Observable<Experiencia[]> {
    return this.http.get(this.urlEndpoint).pipe(
      map((response) => response as Experiencia[]),
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }

  create(experiencia_: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(this.urlEndpoint, experiencia_, {headers: this.httpHeaders})
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }

  //editar
  getExperienciaEditada(id: number): Observable<Experiencia> {
    return this.http.get<Experiencia>(`${this.urlEndpoint}/${id}`)
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }

  //actualizar
  update(experiencia_: Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>(`${this.urlEndpoint}/${experiencia_.id}`, experiencia_, {headers: this.httpHeaders})
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))
  }

//eliminar
  delete(id: number | undefined): Observable<Experiencia> {
    return this.http.delete<Experiencia>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders})
      .pipe(catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      }))

  }
}
