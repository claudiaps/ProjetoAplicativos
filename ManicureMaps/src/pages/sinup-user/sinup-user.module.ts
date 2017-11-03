import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SinupUserPage } from './sinup-user';

@NgModule({
  declarations: [
    SinupUserPage,
  ],
  imports: [
    IonicPageModule.forChild(SinupUserPage),
  ],
})
export class SinupUserPageModule {}
