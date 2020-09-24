import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConstants } from './../constants/app.constants';
import { Observable } from 'rxjs';
import { LoginResponse } from './../models/payload/login.response';
import { User } from '../models/user';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginApi = AppConstants.api_login_url;
  private refreshApi = AppConstants.api_refresh_url;
  private signupApi = AppConstants.api_signup_url;
  private readonly jwt = 'TOKEN';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) { }

  logIn(loginRequest: {mail: string, password: string}): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginApi, loginRequest, {headers: this.headers});
  }

  signup(signupRequest: {
         firstName: string,
         lastName: string,
         mail: string,
         password: string,
         matchingPassword: string
      }): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(this.signupApi, signupRequest, {headers: this.headers});
  }

  logOut() {
    this.removeSessionStorage();
  }

  refreshUserSession(): Observable<User> {
    return this.http.get<User>(this.refreshApi, {headers: this.headers});
  }

  storeCurrentUser(token: string) {
    console.log('storeCurrentUser :' + JSON.stringify(jwt_decode(token)));
    sessionStorage.setItem(this.jwt, token);
  }

  removeSessionStorage() {
    sessionStorage.removeItem(this.jwt);
  }

  getJwtToken() {
    const tokenSession = sessionStorage.getItem(this.jwt);
    if (tokenSession !== null) {
        const token = tokenSession.slice(1, -1);
        return token;
    }
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }
}
