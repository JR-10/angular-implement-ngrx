import { Injectable } from '@angular/core';
import { clientsFilters } from '../../models/clients/clientsFilters';
import { clientsRes } from '../../models/clients/clients';
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


  // servicio
  loadClients(parameters?: clientsFilters): Observable<clientsRes> {
    return this.http.get<clientsRes>(`${environment.url}get-clients`)
  }
}
