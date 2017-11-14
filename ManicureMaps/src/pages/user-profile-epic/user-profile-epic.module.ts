import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserProfileEpicPage } from './user-profile-epic';

@NgModule({
  declarations: [
    UserProfileEpicPage,
  ],
  imports: [
    IonicPageModule.forChild(UserProfileEpicPage),
  ],
})
export class UserProfileEpicPageModule {}
