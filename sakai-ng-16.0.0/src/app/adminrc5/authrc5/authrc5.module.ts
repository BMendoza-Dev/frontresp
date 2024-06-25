import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Authrc5RoutingModule } from './authrc5-routing.module';


@NgModule({
  imports: [
    CommonModule,
    Authrc5RoutingModule
  ]
})
export class Authrc5Module { }
