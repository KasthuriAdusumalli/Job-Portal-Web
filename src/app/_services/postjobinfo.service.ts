import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostjobinfoService {
  _url = 'http://localhost:8081/job-requirment/save';
  constructor(private http: HttpClient) {}

  post(jobdata: any): Observable<any> {
    return this.http.post<any>(this._url, jobdata);
  }
}
