import {Observable} from "rxjs";
import {User} from "../models/User";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class ResourceService{

  constructor(private http: HttpClient) {
  }

  fetchCurrentUserAccount(): Observable<User>{
    const httpHeaders = new HttpHeaders().set('authorization', 'Bearer ' + this.getAuthorizationToken())
  }
}
