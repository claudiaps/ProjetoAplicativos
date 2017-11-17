import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManicureLoginPage } from './manicure-login';

@NgModule({
  declarations: [
    ManicureLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(ManicureLoginPage),
  ],
})
export class ManicureLoginPageModule {}
