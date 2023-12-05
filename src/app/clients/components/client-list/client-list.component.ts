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

  constructor(
    // private clientService: ClientsService // Anterior con servicio
    private store: Store<AppState>// nueva con ngrx
  ){}

  ngOnInit(): void {
    this.GetClients();
  }


  GetClients(): void {
    console.log('Disparamos la accion -> action');
    // ********** Con el servicio directo **********
    // this.clientService.loadClients().subscribe(
    //   (res: ClientsRes) => {
    //     console.log('valor de la respuesta del servicio: ',res);
    //   }
    // )

    // ************ con ngrx ************************
    this.store.dispatch(getClients({ }))
  }
}
