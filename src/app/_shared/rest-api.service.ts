import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_shared/user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  apiURL = environment.baseUrl;
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
  constructor(private http: HttpClient) {}

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    }),
  };

  // HttpClient API get() method => Fetch employees list
  getEmployees(apiURL: any): Observable<User> {
    return this.http
      .get<User>(apiURL + 'viewallcandidate')
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch employee
  getEmployee(id: any, apiURL: any): Observable<any> {
    return this.http
      .get<any>(apiURL + 'getCandidate/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API post() method =>  post data
  postRequest(employee: any, endpoint: any, apiURL: any): Observable<any> {
    return this.http.post<any>(
      this.apiURL + endpoint,
      JSON.stringify(employee),
      this.httpOptions
    );
  }

  // HttpClient API get() method => Fetch employees list
  getRequest(apiURL: any, endpoint: any): Observable<any> {
    return this.http
      .get<any>(apiURL + endpoint)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API put() method => Update employee
  update(id: any, employee: any, apiURL: any, endpoint: any): Observable<any> {
    return this.http
      .put<any>(
        apiURL + endpoint + '/' + id,
        JSON.stringify(employee),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API delete() method => Delete employee
  deleteEmployee(id: any, apiURL: any, endpoint: any) {
    return this.http
      .delete<User>(this.apiURL + endpoint + '/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      // Swal.fire({
      //   position: 'top-end',
      //   icon: 'error',
      //   title: errorMessage,
      //   showConfirmButton: false,
      //   timer: 3000,
      // });
    }
    return throwError(error);
  }
}
