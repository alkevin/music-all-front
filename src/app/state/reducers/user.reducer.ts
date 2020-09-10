import { Action, createReducer, on } from '@ngrx/store';
import { loadUser
  , loadUserFailure
  , loadUserSuccess
  , refreshUser
  , refreshUserFailure
  , refreshUserSuccess
  , signUser
  , signUserFailure
  , signUserSuccess
  , DestroyeUser
  , DestroyeUserSuccess } from '../actions/user.actions';

import { User } from '../../shared/models/user';

export const userLoggedFeatureKey = 'userLogged';

export interface UserLoggedState {
  user: User;
  isLoading: boolean;
}

export const initialState: UserLoggedState = {
  user: {
    firstName: null,
    lastName: null,
    mail: null,
    roles: [
      {
        privileges: [
          {
            name: null,
          }
        ],
        name: null,
        authority: null,
      }
    ],
    provider: null,
    providerId: null,
    connected: false,
  },
  isLoading: false

};


const userReducer = createReducer(
  initialState,
  on(loadUser, state => {
    return {
      ...state,
      isLoading: true
    };
  }),
  on(loadUserSuccess, (state, {data}) => {
    return {
      ...state,
      user: {
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        mail: data.user.mail,
        roles: data.user.roles,
        provider: data.user.provider,
        providerId: data.user.providerId,
        connected: data.user.connected,
      },
      isLoading: false
    };
  }),
  on(loadUserFailure, state => {
    return {
      ...state,
      isLoading: false
    };
  }),
  on(refreshUser, state => {
    return {
      ...state,
      isLoading: true
    };
  }),
  on(refreshUserSuccess, (state, {data}) => {
    return {
      ...state,
      user: {
        firstName: data.firstName,
        lastName: data.lastName,
        mail: data.mail,
        roles: data.roles,
        provider: data.provider,
        providerId: data.providerId,
        connected: data.connected,
      },
      isLoading: false
    };
  }),
  on(refreshUserFailure, state => {
    return {
      ...state,
      isLoading: false
    };
  }),
  on(signUser, state => {
    return {
      ...state,
      isLoading: true
    };
  }),
  on(signUserSuccess, (state, {data}) => {
    return {
      ...state,
      user: {
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        mail: data.user.mail,
        roles: data.user.roles,
        provider: data.user.provider,
        providerId: data.user.providerId,
        connected: data.user.connected,
      },
      isLoading: false
    };
  }),
  on(signUserFailure, state => {
    return {
      ...state,
      isLoading: false
    };
  }),
  on(DestroyeUser, state => {
    return {
      ...state,
      isLogout: true
    };
  }),
  on(DestroyeUserSuccess, () => {
    return {
      user: {
        firstName: null,
        lastName: null,
        mail: null,
        roles: [],
        provider: null,
        providerId: null,
        connected: false,
      },
      isLoading: false
    };
  })
);

export function reducer(state: UserLoggedState | undefined, action: Action) {
  return userReducer(state, action);
}
