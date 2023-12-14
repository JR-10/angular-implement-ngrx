import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { ClientsRes } from './../../../models/clients/clients';
import { AppState } from '../../../models/appState/appState';
import { Store } from '@ngrx/store';
import { deleteClient } from '../../../store/actions/clients/clients.actions';
import { Router } from '@angular/router';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  // declaracion de variables
  clients: ClientsRes[] = [];// variable para la tabla

  constructor(
    private store: Store<AppState>, // nueva con ngrx
    private router: Router
  ){}

  ngOnInit(): void {
    this.buildClientsTable();
  }

  buildClientsTable(): void {
    this.store.select(AppState => AppState.clients).subscribe((resClients) => {
      this.clients = resClients;
    })
  }

  deleteClient(clientId: number): void {
    this.store.dispatch(deleteClient({clientId: clientId}));
  }

  updateClient(clientId: number): void {
    console.log('vamos a Actualicar el cliente id: ', clientId);
    if(clientId) this.router.navigate(['clients/clientUpdate', {clientId: clientId}]);
  }

}
