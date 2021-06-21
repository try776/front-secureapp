import {Component, OnInit} from '@angular/core';
import {LoginCredentials} from "../models/LoginCredentials";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginCredentials = new LoginCredentials();

  constructor() {
  }

  ngOnInit() {
  }

}
