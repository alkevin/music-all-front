import { createAction, props } from '@ngrx/store';

export const loadUser = createAction(
  '[User] Load User',
  props<{ data: any }>()
);

export const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ data: any }>()
);

export const loadUserFailure = createAction(
  '[User] Load User Failure',
  props<{ error: any }>()
);

export const signUser = createAction(
  '[User] Sign User',
  props<{ data: any }>()
);

export const signUserSuccess = createAction(
  '[User] Sign User Success',
  props<{ data: any }>()
);

export const signUserFailure = createAction(
  '[User] Sign User Failure',
  props<{ error: any }>()
);

export const refreshUser = createAction(
  '[User] Refresh User',
);

export const refreshUserSuccess = createAction(
  '[User] Refresh User Success',
  props<{ data: any }>()
);

export const refreshUserFailure = createAction(
  '[User] Refresh User Failure',
  props<{ error: any }>()
);

export const DestroyeUser = createAction(
  '[User] Destroye User',
);

export const DestroyeUserSuccess = createAction(
  '[User] Destroye User Success',
);
