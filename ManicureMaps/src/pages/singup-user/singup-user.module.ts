import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingupUserPage } from './singup-user';

@NgModule({
  declarations: [
    SingupUserPage,
  ],
  imports: [
    IonicPageModule.forChild(SingupUserPage),
  ],
})
export class SingupUserPageModule {}
