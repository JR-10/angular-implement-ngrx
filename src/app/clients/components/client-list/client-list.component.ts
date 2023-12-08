import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { ClientsRes } from './../../../models/clients/clients';
import { AppState } from '../../../models/appState/appState';
import { Store } from '@ngrx/store';
import { getClients } from '../../../store/actions/clients/clients.actions';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  // declaracion de variables
  clients: ClientsRes[] = [];// variable para la tabla

  constructor(
    private store: Store<AppState>// nueva con ngrx
  ){}

  ngOnInit(): void {
    this.buildClientsTable();
  }

  buildClientsTable(): void {
    this.store.select(AppState => AppState.clients).subscribe((resClients) => {
      console.log('resClients', resClients);
      this.clients = resClients;
    })
  }

  deleteClient(clientId: number): void {
    console.log('vamos a Eliminar el cliente id: ', clientId);
  }

  updateClient(clientId: number): void {
    console.log('vamos a Actualicar el cliente id: ', clientId);
  }

}
