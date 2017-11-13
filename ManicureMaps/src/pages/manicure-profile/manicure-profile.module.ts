import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManicureProfilePage } from './manicure-profile';

@NgModule({
  declarations: [
    ManicureProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ManicureProfilePage),
  ],
})
export class ManicureProfilePageModule {}
