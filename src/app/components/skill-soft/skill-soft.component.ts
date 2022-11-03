import { Component, OnInit } from '@angular/core';
import {TokenServicio} from "../../servicio/token.servicio";


@Component({
  selector: 'app-skill-soft',
  templateUrl: './skill-soft.component.html',
  styleUrls: ['./skill-soft.component.css']
})
export class SkillSoftComponent implements OnInit {
  isLogger=false;

  constructor(private tokenServicio: TokenServicio) { }

  ngOnInit(): void {
    if (this.tokenServicio.getToken()) {
      this.isLogger = true;
    } else {
      this.isLogger = false;
    }
  }

}
