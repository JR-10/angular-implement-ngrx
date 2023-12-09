import { Injectable } from '@angular/core';
import { ClientsFilters } from '../../models/clients/clientsFilters';
import { ClientsRes } from '../../models/clients/clients';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    private http: HttpClient
  ) { }


  // servicio obtener data API
  loadClients(parameters?: ClientsFilters): Observable<ClientsRes> {
    console.log('llega hasta el servicio');
    return this.http.get<ClientsRes>(`${environment.url}get-clients`)
  }

  // servicio crear data API
  addClients(client: ClientsRes): Observable<ClientsRes> {
    console.log('llega hasta el servicio');
    return this.http.post<ClientsRes>(`${environment.url}add-client`, client)
  }
}
