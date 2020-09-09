import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProtectedRoutingModule } from './protected-routing.module';
import { HomeModule } from './home/home.module';
import { ProfilComponent } from './profil/profil.component';
import { PersoInfoComponent } from './profil/perso-info/perso-info.component';
import { MusicalInfoComponent } from './profil/musical-info/musical-info.component';


@NgModule({
  declarations: [
    ProfilComponent,
    PersoInfoComponent,
    MusicalInfoComponent
  ],
  imports: [
    SharedModule,
    ProtectedRoutingModule,
    HomeModule
  ]
})
export class ProtectedModule { }
