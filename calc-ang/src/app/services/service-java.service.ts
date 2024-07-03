import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../domain/cliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceJavaService {
  private baseUrl = 'http://localhost:8080/demojakarta/rs/clientes';

  constructor(private http: HttpClient) { }

  createCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente);
  }

  getAllClientes() {
    let url = this.baseUrl + "/list"
    return this.http.get<any>(url)
  }

  
  updateCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.baseUrl, cliente);
  }


}