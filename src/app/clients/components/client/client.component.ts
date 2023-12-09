import { Component, OnInit } from '@angular/core';
import { ClientsRes } from '../../../models/clients/clients';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../models/appState/appState';
import { addClient } from '../../../store/actions/clients/clients.actions';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  // declaracion de variables locales
  client: ClientsRes = {}; // variable para

  clientForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    dni: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
  })

  constructor(
    private store: Store<AppState> // ngrx
  ) {}

  ngOnInit(): void {}

  saveNewClient(): void {
    const {clientForm: {status, value}} = this;

    if(value.age){
      let newClient: ClientsRes = {...value, age: + value.age};
      this.store.dispatch(addClient({client: newClient}));
    }
  }

  checkInputValue(e: any): void {
    console.log('Valor uno: ', e);
  }

}
