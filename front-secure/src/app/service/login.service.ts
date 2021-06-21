import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginCredentials} from "../models/LoginCredentials";


const LOGIN_API_URL = `http://localhost:8080/api/login`;

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  postLogin(loginCredentials: LoginCredentials) {
    const httpHeaders = new HttpHeaders().set('authorization', 'Bearer ' + this.getAuthorizationToken())
    return this.http.post<LoginCredentials>(LOGIN_API_URL, loginCredentials);
  }


  public getAuthorizationToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  public setAuthorizationToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }
}
