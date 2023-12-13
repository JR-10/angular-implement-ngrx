import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getClients } from '../../../store/actions/clients/clients.actions';
import { AppState } from '../../../models/appState/appState';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(
    private store: Store<AppState>// nueva con ngrx
  ){}


  ngOnInit(): void {
    this.GetClients();
  }

  GetClients(): void {
    this.store.dispatch(getClients({ })) // traer los datos de un componente hijo
  }
}
