import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EstudiosComponent} from "./components/estudios/estudios.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
