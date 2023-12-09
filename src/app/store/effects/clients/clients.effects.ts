import { Injectable } from "@angular/core"
import { ClientsService } from './../../../clients/services/clients.service';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getClients, getClientsSuccess, addClient, addClientSuccess } from '../../actions/clients/clients.actions';
import { catchError, concatMap, map, mergeMap, of, tap } from "rxjs";

@Injectable()

// clase de tipo clientsEffects
export class ClientsEffects {

  // constructor para ijectar el servicio creado anteriormente
  constructor(
    private clienstService: ClientsService,
    private action$: Actions // es necesario un observable
  ){}

  // efects listar clientes
  loadClients$ = createEffect(() => {
    return this.action$
    .pipe(
      ofType(getClients),
      tap((params: any) => console.log('params:', params)),
      concatMap((action) => {
        console.log('action', action.parameters);
        console.log('action', action.type);
        const {parameters} = action;
        console.log('Parametros:', parameters);

        return this.clienstService.loadClients(parameters)
        .pipe(
          map((clients: any) => getClientsSuccess({clients})),
          catchError((error: any) => of())
        )
      })
    )
  })

  // efects Crear Cliente
  addClient$ = createEffect(() => {
    return this.action$
    .pipe(
      ofType(addClient),
      mergeMap((action) => {
        console.log('action: ', action.client);
        const { client } = action;
        return this.clienstService.addClients(client)
        .pipe(
          map((data) => {
            console.log('data respuesta del servicio: ', data);
            return addClientSuccess({client})
          })
        )
      })
    )
  })
}
