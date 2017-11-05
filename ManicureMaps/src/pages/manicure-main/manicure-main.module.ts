import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManicureMainPage } from './manicure-main';

@NgModule({
  declarations: [
    ManicureMainPage,
  ],
  imports: [
    IonicPageModule.forChild(ManicureMainPage),
  ],
})
export class ManicureMainPageModule {}
