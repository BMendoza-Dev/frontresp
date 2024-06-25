
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Loginrc5Component } from './loginrc5.component';

const routes: Routes = [
  { path: '', component: Loginrc5Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Loginrc5RoutingModule { }