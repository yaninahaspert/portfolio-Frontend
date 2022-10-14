import { Component, OnInit } from '@angular/core';
import {ServicioService} from "../../servicio.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  banner:any[]=[];

  constructor(private _servicio: ServicioService) {
    this.banner = _servicio.obtenerBanner()
  }

  ngOnInit(): void {
  }

}
