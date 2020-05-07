import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProtectedRoutingModule } from './protected-routing.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ProtectedRoutingModule,
    HomeModule
  ]
})
export class ProtectedModule { }
