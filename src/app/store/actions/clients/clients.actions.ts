import { createAction, props } from "@ngrx/store"
import { ClientsFilters } from '../../../models/clients/clientsFilters';
import { ClientsRes } from '../../../models/clients/clients';

export const getClients = createAction(
  '[Clients] Get clients',
  props<{ parameters ? : ClientsFilters }>()  // metodo propio de ngrx
)

export const getClientsSuccess = createAction(
  '[Clients] Get clients success',
  props<{ clients ? : ClientsRes[] }>()  // metodo propio de ngrx
)
