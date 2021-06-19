import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../service/login.service";
import {LoginCredentials} from "../models/LoginCredentials";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  guest = new LoginCredentials();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private loginService: LoginService) {
  }

  ngOnInit() {
  }

  handleSave(loginCredentials: LoginCredentials) {

    if (this.guest) {
      this.loginService.post(loginCredentials).subscribe(
        (guest1: LoginCredentials) => {
          // this.router.navigate(['/loginCredentials-profile', guest1.id]);
        }, //(response: HttpErrorResponse) => this.errors = response.error!.validationErrors as ValidationError[]
      );
    } else {
      this.loginService.post(loginCredentials).subscribe(
        (guest2: LoginCredentials) => {
          // this.toastr.success(this.translateService.instant('loginCredentials.edit.loginCredentials-created'));
          // this.router.navigate(['/loginCredentials-profile' , guest2.id]);
        }, (response: HttpErrorResponse) => {

          if (response.status === 404) {
            // this.toastr.error(this.translateService.instant('user.errors.user-not-found'));
          } else {
            // this.toastr.error(this.translateService.instant(response.error.validationErrors[0].message));
          }
        }
      );
    }
  }

}
