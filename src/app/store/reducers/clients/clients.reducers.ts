import { createReducer, on } from '@ngrx/store';
import { ClientsRes } from '../../../models/clients/clients';
import { getClientsSuccess } from '../../actions/clients/clients.actions';

export interface ClientsState {
  clients : ClientsRes
}

// inicializar el estado
const initialState: ClientsRes[] = [];

export const clientsReducer = createReducer(
  initialState,
  on( getClientsSuccess, ( state , {clients} ) => {
    console.log('valor del state en reducers: ', state);
    console.log('valor del clients en reducers: ', clients);
    state = clients!;
    return state
  })
)
