import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabUserChatPage } from './tab-user-chat';

@NgModule({
  declarations: [
    TabUserChatPage,
  ],
  imports: [
    IonicPageModule.forChild(TabUserChatPage),
  ],
})
export class TabUserChatPageModule {}
