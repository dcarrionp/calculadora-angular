import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Cliente } from '../domain/cliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceJavaService {
  private baseUrl = 'http://localhost:8080/demojakarta/rs/clientes';

  constructor(private http: HttpClient) { }

  createCliente(cliente: Cliente): Observable<Cliente> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<Cliente>(this.baseUrl, cliente, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllClientes(): Observable<Cliente[]> {
    let url = this.baseUrl + "/list"
    return this.http.get<Cliente[]>(url);
  }

  updateCliente(cliente: Cliente): Observable<Cliente> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<Cliente>(this.baseUrl, cliente)
  }

  deleteCliente(cedula: string): Observable<void> {
    const url = `${this.baseUrl}/?cedula=${cedula}`;
    return this.http.delete<void>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError('Something went wrong; please try again later.');
  }

}