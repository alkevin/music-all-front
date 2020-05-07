import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ProtectedModule } from '../protected/protected.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftComponent } from './components/sidenav/left/left.component';
import { RightComponent } from './components/sidenav/right/right.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LeftComponent,
    RightComponent
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    RouterModule,
    ProtectedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LeftComponent,
    RightComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded.');
    }
  }
}
