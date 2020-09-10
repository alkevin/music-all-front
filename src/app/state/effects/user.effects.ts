import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { loadUser
       , loadUserSuccess
      , loadUserFailure
      , refreshUser
      , refreshUserSuccess
      , refreshUserFailure
      , signUser
      , signUserSuccess
      , signUserFailure
      , DestroyeUser
      , DestroyeUserSuccess } from '../actions/user.actions';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LoginRequest } from './../../shared/models/payload/login.request';
import { SignupRequest } from './../../shared/models/payload/signup.request';


@Injectable()
export class UserLoggedEffects {
  constructor(private actions$: Actions
            , private authService: AuthService
            , private router: Router) {}

  loadUser$ = createEffect(
    () =>
    this.actions$.pipe(
      ofType(loadUser),
      map( action => action.data ),
      switchMap( (payload: LoginRequest) => {
        return this.authService.logIn(payload).pipe(
          map( data => {
            this.authService.storeCurrentUser(JSON.stringify(data.token));
            return loadUserSuccess( {data} );
          }),
          catchError( (err) => of(loadUserFailure(err)))
        );
      })
    )
  );

  loadUserSuccess$ = createEffect(
    () =>
    this.actions$.pipe(
      ofType(loadUserSuccess),
      map( () => {
        this.router.navigate(['/home']);
      })
    ),
    { dispatch: false }
  );

  refreshUser$ = createEffect(
    () =>
    this.actions$.pipe(
      ofType(refreshUser),
      map( action => action ),
      switchMap( () => {
        return this.authService.refreshUserSession().pipe(
          map( data => {
            return refreshUserSuccess( {data} );
          }),
          catchError( (err) => of(refreshUserFailure(err)))
        );
      })
    )
  );

  refreshUserSuccess$ = createEffect(
    () =>
    this.actions$.pipe(
      ofType(refreshUserSuccess),
      map( () => {
      })
    ),
    { dispatch: false }
  );

  signUser$ = createEffect(
    () =>
    this.actions$.pipe(
      ofType(signUser),
      map( action => action.data ),
      switchMap( (payload: SignupRequest) => {
        return this.authService.signup(payload).pipe(
          map( data => {
            this.authService.storeCurrentUser(JSON.stringify(data.token));
            return signUserSuccess( {data} );
          }),
          catchError( (err) => of(signUserFailure(err)))
        );
      })
    )
  );

  signUserSuccess$ = createEffect(
    () =>
    this.actions$.pipe(
      ofType(signUserSuccess),
      map( () => {
        this.router.navigate(['/home']);
      })
    ),
    { dispatch: false }
  );

  DestroyeUser$ = createEffect(
    () =>
    this.actions$.pipe(
      ofType(DestroyeUser),
      map( () => {
        this.authService.logOut();
        return DestroyeUserSuccess();
      })
    )
  );

  DestroyeUserSucces$ = createEffect(
    () =>
    this.actions$.pipe(
      ofType(DestroyeUserSuccess),
      map( () => {
        this.router.navigate(['/connexion/signin']);
      })
    ),
    { dispatch: false }
  );

}
