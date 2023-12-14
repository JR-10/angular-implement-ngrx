import { createSelector } from '@ngrx/store';
import { AppState } from '../../../models/appState/appState';
import { ClientsRes } from '../../../models/clients/clients';

export const selectClient = (state: AppState) => state.clients; // mostrar todos los clientes

export const selectClientById = (clientId: number) =>
  createSelector(selectClient, (clients: ClientsRes[]) => {
    // validacion si hay clientes
    if (clients) {
      // validacion de para la busqueda
      if (clients.find((c) => c.clientId === +clientId)) {
        return clients.find((c) => c.clientId === +clientId); // retorna el valor encontrado
      } else {
        return 0;
      }
    }
  });
