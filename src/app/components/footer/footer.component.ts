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
  isLogger = false;
  redes: Red[] =[];

  constructor(private redService: RedesService, private activateRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(params => {
      this.redService.getRedes(params['id']).subscribe(red => this.redes = red);
    })
  }

}
