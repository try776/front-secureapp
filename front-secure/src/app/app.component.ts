import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-secure';
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

functionOnWhichRedirectShouldHappen(){
  this.router.navigate(['/home']);
}

}
