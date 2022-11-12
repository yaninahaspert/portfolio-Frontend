import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  idUsuario: string | undefined;

  constructor(private activateRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(params => {
      let idUsuario = params['id']
      alert(idUsuario);
    })
  }
}
