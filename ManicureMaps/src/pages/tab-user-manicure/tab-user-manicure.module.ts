import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabUserManicurePage } from './tab-user-manicure';

@NgModule({
  declarations: [
    TabUserManicurePage,
  ],
  imports: [
    IonicPageModule.forChild(TabUserManicurePage),
  ],
})
export class TabUserManicurePageModule {}
