import {Injectable} from "@angular/core";

import {HttpClient} from "@angular/common/http";
import {LoginCredentials} from "../models/LoginCredentials";


const GUEST_API_URL = `api/login`;

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) {
    }

    post(loginCredentials: LoginCredentials) {
        return this.http.post<LoginCredentials>(GUEST_API_URL, loginCredentials);
    }

    /*
    create(guest: Guest) {
        return this.http.post<Guest>(GUEST_API_URL, guest);
    }

    get(id: number) {
        return this.http.get<Guest>(`${GUEST_API_URL}/${id}`);
    }

    getAll() {
        return this.http.get(`${GUEST_API_URL}/all`);
    }

    deleteGuest(id: number) {
        return this.http.delete(`${GUEST_API_URL}/${id}`);
    }

     */

}
