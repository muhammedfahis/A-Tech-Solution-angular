import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor as http
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptor implements http {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userDataString: any = localStorage.getItem('userData');
    const userData: any = JSON.parse(userDataString);
    const token = userData?.token;
    if (token) {
      const modifiedReq = req.clone({
        setHeaders: {
          'Authorization': token
        }
      });
      return next.handle(modifiedReq);
    }
    return next.handle(req)

  }
}
