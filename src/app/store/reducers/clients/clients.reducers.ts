import { createReducer, on } from '@ngrx/store';
import { ClientsRes } from '../../../models/clients/clients';
import { addClientSuccess, getClientsSuccess } from '../../actions/clients/clients.actions';

export interface ClientsState {
  clients : ClientsRes
}

// inicializar el estado
const initialState: ClientsRes[] = [];

export const clientsReducer = createReducer(
  initialState,
  on( getClientsSuccess, ( state , {clients} ) => {
    console.log('valor del state en reducers listar: ', state);
    console.log('valor del clients en reducers listar: ', clients);
    state = clients!;
    return state
  }),

  on( addClientSuccess, (state, {client}) => {
    console.log('valor del state en reducers crear: ', state);
    console.log('valor del client en reducers crear : ', client);
    let myState = [...state, client];
    return myState;
  })
)
