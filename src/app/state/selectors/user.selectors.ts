import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/index';
import { userLoggedFeatureKey} from '../reducers/user.reducer';

export const selectedUserState = (state: AppState) => state[userLoggedFeatureKey];
export const getUserLogged = createSelector(selectedUserState, userstate => userstate.user);
