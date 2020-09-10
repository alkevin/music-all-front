import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MessagerieRoutingModule } from './messagerie-routing.module';
import { MessagerieComponent } from './messagerie.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ListConversationComponent } from './navigation/list-conversation/list-conversation.component';
import { ChatComponent } from './chat/chat.component';
import { ConversationComponent } from './chat/conversation/conversation.component';
import { MessageComponent } from './chat/conversation/message/message.component';
import { TextBoxComponent } from './chat/text-box/text-box.component';


@NgModule({
  declarations: [
    MessagerieComponent,
    NavigationComponent,
    ListConversationComponent,
    ChatComponent,
    ConversationComponent,
    MessageComponent,
    TextBoxComponent
  ],
  imports: [
    SharedModule,
    MessagerieRoutingModule
  ]
})
export class MessagerieModule { }
