import { NgModule } from '@angular/core';
import { ConnexionModule } from './connexion/connexion.module';
import { SharedModule } from '../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PublicRoutingModule,
    ConnexionModule
  ]
})
export class PublicModule { }
