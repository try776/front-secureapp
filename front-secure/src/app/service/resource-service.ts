import {Observable} from "rxjs";
import {UserModel} from "../models/user-model";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class ResourceService{

  constructor(private http: HttpClient) {
  }

  fetchCurrentUserAccount(): Observable<UserModel>{
    const httpHeaders = new HttpHeaders().set('authorization', 'Bearer ' + this.getAuthorizationToken())
  }
}
