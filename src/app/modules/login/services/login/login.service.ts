import { HttpClient } from "@angular/common/http";
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { environment } from '../../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }
  login(user: any): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}/user/login`, { ...user })
      .pipe(
        catchError(this.handleError)
      );
  };
  register(user: any): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}/user/register`, { ...user })
      .pipe(
        catchError(this.handleError)
      );
  }
  handleError(error: any) {
    console.error('error', error);
    return throwError(error.json().error || 'Server error')

  }
}
