import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MessagerieRoutingModule } from './messagerie-routing.module';
import { MessagerieComponent } from './messagerie.component';
import { ListConversationComponent } from './list-conversation/list-conversation.component';


@NgModule({
  declarations: [MessagerieComponent, ListConversationComponent],
  imports: [
    SharedModule,
    MessagerieRoutingModule
  ]
})
export class MessagerieModule { }
