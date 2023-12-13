import { Injectable } from "@angular/core"
import { ClientsService } from './../../../clients/services/clients.service';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getClients, getClientsSuccess, addClient, addClientSuccess, deleteClient, deleteClientSuccess } from '../../actions/clients/clients.actions';
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
        const {parameters} = action;
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
        const { client } = action;
        return this.clienstService.addClient(client)
        .pipe(
          map((data) => {
            return addClientSuccess({client})
          })
        )
      })
    )
  })

  // efects Crear Cliente
  deleteClient$ = createEffect(() => {
    return this.action$
    .pipe(
      ofType(deleteClient),
      mergeMap((action) => {
        const { clientId } = action;
        return this.clienstService.deleteClient(clientId)
        .pipe(
          map((data) => {
            return deleteClientSuccess({clientId : clientId})
          })
        )
      })
    )
  })
}
