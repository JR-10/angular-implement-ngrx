import { createReducer, on } from '@ngrx/store';
import { ClientsRes } from '../../../models/clients/clients';
import { addClientSuccess, deleteClientSuccess, getClientsSuccess } from '../../actions/clients/clients.actions';

export interface ClientsState {
  clients : ClientsRes
}

// inicializar el estado
const initialState: ClientsRes[] = [];

export const clientsReducer = createReducer(
  initialState,
  on( getClientsSuccess, ( state , {clients} ) => {
    state = clients!;
    return state
  }),

  on( addClientSuccess, (state, {client}) => {
    let stateCreate = [...state, client];
    return stateCreate;
  }),

  on( deleteClientSuccess, (state, {clientId}) => {
    let stateDelete = state.filter((c) => c.clientId === clientId )
    return stateDelete;
  })

)
