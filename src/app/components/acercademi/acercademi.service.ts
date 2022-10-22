import {Injectable} from "@angular/core";
import {Acercademi} from "./acercademi";
import {ACERCADEMI} from "./acercademi.json";
import {map, Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable()
export class AcercademiService {
  private urlEndpoint: string = 'http://localhost:8080/api/personas';
  private httpHeaders = new HttpHeaders({'content-type': 'application/json'})

  constructor(private http: HttpClient) {
  }

  getAcercademi(): Observable<Acercademi[]> {
    //return of (ACERCADEMI);
    return this.http.get(this.urlEndpoint).pipe(
      map((response) => response as Acercademi[])
    );
  }

  create(acercademi: Acercademi): Observable<Acercademi> {
    return this.http.post<Acercademi>(this.urlEndpoint, acercademi, {headers: this.httpHeaders})
  }
}

