import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../models/appState/appState';
import { ActivatedRoute } from '@angular/router';
import { ClientsRes } from '../../../models/clients/clients';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { selectClientById } from '../../../store/selectors/clients/clients.selectors';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.scss']
})
export class ClientUpdateComponent implements OnInit {

  client: ClientsRes = {}; // declaracion de la variable para los datos del cliente

  // estructura del formulario
  clientForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    dni: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
  });

  constructor(
    private store: Store<AppState>,
    private activateRoute: ActivatedRoute, // validar que parametros vienene en la url
  ){}

  ngOnInit(): void {
      this.checkParams();
  }

  checkParams(): void {
    this.activateRoute.paramMap.subscribe(params => {
      console.log('valor de params: ', (params as any).get('clientId'));
      this.client.clientId = (params as any).get('clientId');
      const {client: {clientId}} = this; // variable de tipo this

      // validacion si existe
      if(clientId){
        this.store.select(selectClientById(clientId)). // llamado al selector
          subscribe(client => {
            console.log('muestra el cliente seleccionado: ', client);
            if(client) this.BuildForm(client);
          })
      }

    })
  }


  /**
   * Metodo para construir el formulario
   * @param client
   */
  BuildForm(client: ClientsRes): void {
    this.client = client;
  }

  updateNewClient(): void {

  }

  checkInputValue(e: any): void {
    console.log('valor del checkInput: ', e);
  }

}
