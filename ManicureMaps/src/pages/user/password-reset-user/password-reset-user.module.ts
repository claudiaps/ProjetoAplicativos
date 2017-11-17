import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasswordResetUserPage } from './password-reset-user';

@NgModule({
  declarations: [
    PasswordResetUserPage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordResetUserPage),
  ],
})
export class PasswordResetUserPageModule {}
