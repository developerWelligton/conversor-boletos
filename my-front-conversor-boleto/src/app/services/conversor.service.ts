import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private apiUrl = 'http://localhost:3000/teste';

  constructor(private http: HttpClient) { }

  getHello() {
    return this.http.get<string>(this.apiUrl);
  }
}
