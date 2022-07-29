import { HttpClient } from "@angular/common/http";
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { environment } from '../../../../environments/environment';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getVegitables(searchValue: string): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/vegitable/getList?searchkey=${searchValue}`)
      .pipe(
        catchError(this.handleError)
      );
  };
  sortList(data: any[], orderBy: string, order: any) {
    return _.orderBy(data, [doc => doc[orderBy] ? doc[orderBy] : ''], [order]);
  }
  addVegitable(vegitable: any): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}/vegitable/addlist`, { ...vegitable })
      .pipe(
        catchError(this.handleError)
      );
  }
  handleError(error: any) {
    console.error('error', error);
    return throwError(error.json().error || 'Server error')

  }
  closeVegitableModal() {

  }

}
