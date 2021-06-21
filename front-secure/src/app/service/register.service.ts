import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginCredentials} from "../models/LoginCredentials";
import {User} from "../models/User";


const REGISTER_API_URL = `http://localhost:8080/api/register`;

@Injectable()
export class RegisterService {


    constructor(private http: HttpClient) {
    }

    register(user: User) {
      const httpHeaders = new HttpHeaders().set('authorization', 'Bearer ' + this.getAuthorizationToken())
        return this.http.post<User>(REGISTER_API_URL, user);
    }


    public getAuthorizationToken(): string | null{
      return localStorage.getItem('accessToken');
    }

    public setAuthorizationToken(token: string): void{
      localStorage.setItem('accessToken', token);
    }
}
