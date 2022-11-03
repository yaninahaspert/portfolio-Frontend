import { Component, OnInit } from '@angular/core';
import {TokenServicio} from "../../servicio/token.servicio";

@Component({
  selector: 'app-skills-hard',
  templateUrl: './skills-hard.component.html',
  styleUrls: ['./skills-hard.component.css']
})
export class SkillsHardComponent implements OnInit {
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
