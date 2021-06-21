import {Component, OnInit} from '@angular/core';
import {LoginCredentials} from "../models/LoginCredentials";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginCredentials = new LoginCredentials();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private loginService: LoginService) {
  }

  ngOnInit() {
  }

  login(loginCredentials: LoginCredentials) {
    this.loginService.postLogin(loginCredentials).subscribe(
      (guest1: LoginCredentials) => {
        this.router.navigate(['home']);
      }, //(response: HttpErrorResponse) => this.errors = response.error!.validationErrors as ValidationError[]
    );
  }
}
