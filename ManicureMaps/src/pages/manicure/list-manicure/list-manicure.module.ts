import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListManicurePage } from './list-manicure';

@NgModule({
  declarations: [
    ListManicurePage,
  ],
  imports: [
    IonicPageModule.forChild(ListManicurePage),
  ],
})
export class ListManicurePageModule {}
