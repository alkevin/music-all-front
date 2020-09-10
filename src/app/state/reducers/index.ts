import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromUserLogged from './user.reducer';
import { environment } from '../../../environments/environment';


export interface AppState {

  [fromUserLogged.userLoggedFeatureKey]: fromUserLogged.UserLoggedState;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromUserLogged.userLoggedFeatureKey]: fromUserLogged.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
