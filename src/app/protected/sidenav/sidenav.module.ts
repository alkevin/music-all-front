import { NgModule } from '@angular/core';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListAmisComponent } from './right/list-amis/list-amis.component';

@NgModule({
  declarations: [
    LeftComponent,
    RightComponent,
    ListAmisComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    LeftComponent,
    RightComponent
  ]
})
export class SideNavModule { }
