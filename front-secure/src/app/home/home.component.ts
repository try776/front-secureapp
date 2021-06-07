import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(router: Router) { }

  ngOnInit(): void {
  }

}
