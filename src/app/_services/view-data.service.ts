import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jobdata } from '../utils/jobdata';

@Injectable({
  providedIn: 'root',
})
export class ViewDataService {
  _url = 'http://localhost:8081/job-requirment/all';
  url_update = 'http://localhost:8081/job-requirment/update';
  url_delete = 'http://localhost:8081/job-requirment/delete';
  url_deleteAll = 'http://localhost:8081/job-requirment/deleteAll';
  url_SearchByJobCode = 'http://localhost:8081/job-requirment/searchByJobCode';

  constructor(private http: HttpClient) {}

  getJobData(): Observable<Jobdata[]> {
    return this.http.get<Jobdata[]>(this._url);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.url_update}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(`${this.url_delete}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete<any>(this.url_deleteAll);
  }
}
