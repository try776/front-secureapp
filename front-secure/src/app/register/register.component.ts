import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../service/login.service";
import {LoginCredentials} from "../models/LoginCredentials";
import {HttpErrorResponse} from "@angular/common/http";
import {User} from "../models/User";
import {RegisterService} from "../service/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = new User();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private registerService: RegisterService) {
  }

  ngOnInit() {
  }

  register(user: User) {
    this.registerService.register(user).subscribe(
      (guest1: LoginCredentials) => {
        this.router.navigate(['home']);
      }, //(response: HttpErrorResponse) => this.errors = response.error!.validationErrors as ValidationError[]
    );
  }

}
