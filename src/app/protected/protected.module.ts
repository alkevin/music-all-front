import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProtectedRoutingModule } from './protected-routing.module';
import { HomeModule } from './home/home.module';
import { ProfilComponent } from './profil/profil.component';


@NgModule({
  declarations: [
    ProfilComponent
  ],
  imports: [
    SharedModule,
    ProtectedRoutingModule,
    HomeModule
  ]
})
export class ProtectedModule { }
