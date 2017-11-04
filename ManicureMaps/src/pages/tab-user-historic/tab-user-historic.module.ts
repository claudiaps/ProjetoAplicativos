import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabUserHistoricPage } from './tab-user-historic';

@NgModule({
  declarations: [
    TabUserHistoricPage,
  ],
  imports: [
    IonicPageModule.forChild(TabUserHistoricPage),
  ],
})
export class TabUserHistoricPageModule {}
