import {TokenServicio} from "./token.servicio";
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn:"root"
})
export class Interceptor {
  constructor(private tokenServicio: TokenServicio) {
  }
  intercept (req: HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
    let intReq = req;
    const token = this.tokenServicio.getToken()
    if (token != null) {
      intReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token)
      });
    }
    return next.handle(intReq);
  }
}
export const interceptorProvider=[{
  provide:HTTP_INTERCEPTORS,
  useClass:Interceptor,
  multi:true
}];
