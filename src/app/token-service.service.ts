import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private token: string = ''; // Asignar un valor inicial aquí

  constructor() { }

  setToken(token: string) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }
}
