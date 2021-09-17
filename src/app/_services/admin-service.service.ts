import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../utils/admin';

@Injectable({
  providedIn: 'root',
})
export class AdminServiceService {
  private baseURL = 'http://localhost:2021/admin/';
  constructor(private httpClient: HttpClient) {}

  adminRegister(admin: Admin): Observable<any> {
    return this.httpClient.post(`${this.baseURL}`, admin);
  }

  adminLogin(admin: Admin): Observable<any> {
    return this.httpClient.post(`${this.baseURL + '/login'}`, admin);
  }
}
