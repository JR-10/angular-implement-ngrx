import { createAction, props } from "@ngrx/store"
import { ClientsFilters } from '../../../models/clients/clientsFilters';
import { ClientsRes } from '../../../models/clients/clients';

export const getClients = createAction(
  '[Clients] Get clients',
  props<{ parameters ? : ClientsFilters }>()  // metodo propio de ngrx/ parametros de consulta
)

export const getClientsSuccess = createAction(
  '[Clients] Get clients success',
  props<{ clients ? : ClientsRes[] }>()  // metodo propio de ngrx / resultado de la busqueda
)

export const addClient = createAction(
  '[Clients] Add clients',
  props<{ client : ClientsRes }>()
)


export const addClientSuccess = createAction(
  '[Clients] Add clients success',
  props<{ client : ClientsRes }>()
)
