import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ProtectedModule } from '../protected/protected.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    RouterModule,
    ProtectedModule
  ],
  exports: [
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded.');
    }
  }
}
