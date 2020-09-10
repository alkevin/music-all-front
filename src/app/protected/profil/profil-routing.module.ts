import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from './profil.component';
import { InfosPersoComponent } from './infos-perso/infos-perso.component';
import { InfosMusicienComponent } from './infos-musicien/infos-musicien.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilComponent,
    children: [
      {
        path: 'personnel',
        component: InfosPersoComponent
      },
      {
        path: 'musicien',
        component: InfosMusicienComponent
      },
      {
        path: '',
        redirectTo: 'personnel',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfilRoutingModule { }
