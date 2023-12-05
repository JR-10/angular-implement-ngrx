import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../models/appState/appState";
import { clientsReducer } from "./reducers/clients/clients.reducers";

export const reducers: ActionReducerMap<AppState> = {
  clients : clientsReducer
}
