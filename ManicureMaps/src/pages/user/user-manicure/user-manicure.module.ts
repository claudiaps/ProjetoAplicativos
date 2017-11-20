import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserManicurePage } from './user-manicure';

@NgModule({
  declarations: [
    UserManicurePage,
  ],
  imports: [
    IonicPageModule.forChild(UserManicurePage),
  ],
})
export class UserManicurePageModule {}
