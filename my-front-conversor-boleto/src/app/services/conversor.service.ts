import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private apiUrl = 'http://localhost:3000/teste';

  constructor(private http: HttpClient) { }

  getHello() {
    return this.http.get<string>(this.apiUrl);
  }

  uploadPdf(formData: FormData): Observable<any> {
    const url = `${this.apiUrl}`; // Substitua pelo endpoint correto em seu servidor

    // Enviar a solicitação POST com o arquivo PDF
    return this.http.post(url, formData);
  }
}
