import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor() {}

  getUser() {
    return !!localStorage.getItem('userDetails');
  }
}
