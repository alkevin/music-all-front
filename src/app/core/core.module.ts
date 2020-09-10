import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ProtectedModule } from '../protected/protected.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftComponent } from './components/sidenav/left/left.component';
import { RightComponent } from './components/sidenav/right/right.component';
import { LeftPartenaireComponent } from './components/sidepartenaire/left-partenaire/left-partenaire.component';
import { RightPartenaireComponent } from './components/sidepartenaire/right-partenaire/right-partenaire.component';
import { PublicModule } from '../public/public.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LeftComponent,
    RightComponent,
    LeftPartenaireComponent,
    RightPartenaireComponent
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    RouterModule,
    ProtectedModule,
    PublicModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LeftComponent,
    RightComponent,
    LeftPartenaireComponent,
    RightPartenaireComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded.');
    }
  }
}
