import { NgModule } from '@angular/core';
import { ConnexionRoutingModule } from './connexion-routing.module';
import { ConnexionComponent } from './connexion.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ToggleConnexionComponent } from './toggle-connexion/toggle-connexion.component';
import { LoaderComponent } from '../../components/loader/loader.component';


@NgModule({
  declarations: [
    ConnexionComponent,
    LoginFormComponent,
    SignupFormComponent,
    ToggleConnexionComponent,
    LoaderComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    ConnexionRoutingModule,
  ]
})
export class ConnexionModule { }
