import { ChatsProvider } from './../../../providers/chats/chats';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController } from 'ionic-angular';
import { RequestsProvider } from './../../../providers/requests/requests';

/**
 * Generated class for the ChatUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-user',
  templateUrl: 'chat-user.html',
})
export class ChatUserPage {
  myfriends;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public requestservice: RequestsProvider, public events: Events, public alertCtrl: AlertController,
  public chatservice: ChatsProvider) {
  }

  ionViewWillEnter() {
    this.requestservice.getmymanicures();

    this.events.subscribe('friends', () => {
      this.myfriends = [];
      this.myfriends = this.requestservice.myfriends;
      console.log('funciona tiozão');
    })
  }

  ionViewDidLeave(){
    this.events.unsubscribe('friends');
   }

   buddychat(buddy){
    this.chatservice.initializebuddy(buddy);
    this.navCtrl.push('BuddychatPage');
  }
}


