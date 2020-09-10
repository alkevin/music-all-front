import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProtectedRoutingModule } from './protected-routing.module';
import { HomeModule } from './home/home.module';
import { ProfilModule } from './profil/profil.module';
import { ProfilComponent } from './profil/profil.component';
import { HeaderProfilComponent } from './profil/header-profil/header-profil.component';
import { NavProfilComponent } from './profil/nav-profil/nav-profil.component';
import { InfosPersoComponent } from './profil/infos-perso/infos-perso.component';
import { InfosMusicienComponent } from './profil/infos-musicien/infos-musicien.component';
import { MessagerieModule } from './messagerie/messagerie.module';
import { SideNavModule } from './sidenav/sidenav.module';

@NgModule({
  declarations: [
    ProfilComponent,
    HeaderProfilComponent,
    NavProfilComponent,
    InfosPersoComponent,
    InfosMusicienComponent
  ],
  imports: [
    SharedModule,
    ProtectedRoutingModule,
    HomeModule,
    ProfilModule,
    MessagerieModule,
    SideNavModule
  ]
})
export class ProtectedModule { }
