import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProfilRoutingModule } from './profil-routing.module';
import { SideNavModule } from '../sidenav/sidenav.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    SideNavModule,
    ProfilRoutingModule
  ]
})
export class ProfilModule { }
