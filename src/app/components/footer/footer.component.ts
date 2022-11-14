import { Component, OnInit } from '@angular/core';
import {Red} from "../redes/Red";
import {ActivatedRoute} from "@angular/router";
import {RedesService} from "../redes/redes.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

}
