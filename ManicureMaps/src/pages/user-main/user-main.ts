import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { TabUserManicurePage } from '../tab-user-manicure/tab-user-manicure';
// import { TabUserHistoricPage } from '../tab-user-historic/tab-user-historic';
// import { TabUserChatPage } from '../tab-user-chat/tab-user-chat';

/**
 * Generated class for the UserMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-main',
  templateUrl: 'user-main.html',
})

// export class TabsPage {

//   tabManicure = TabUserManicurePage;
//   tabHistoric = TabUserHistoricPage;
//   tabChat = TabUserChatPage;

//   constructor() {

//   }
// }

export class UserMainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserMainPage');
  }

}
