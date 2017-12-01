import { ChatsProvider } from './../../providers/chats/chats';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Content} from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the BuddychatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buddychat',
  templateUrl: 'buddychat.html',
})
export class BuddychatPage {

  @ViewChild('content') content: Content;

  buddy: any;
  newmessage;
  allmessages =[];
  photoURL;
  constructor(public navCtrl: NavController, public navParams: NavParams, public chatservice: ChatsProvider,
  public events: Events) {
    this.buddy = this.chatservice.buddy;
    this.photoURL = firebase.auth().currentUser.photoURL;
    this.scrollto();
    this.events.subscribe('newmessage', () => {
      this.allmessages = [];
      this.allmessages = this.chatservice.buddymessages;
      this.scrollto();
    })
  }

  addmessage() {
    this.chatservice.addnewmessage(this.newmessage).then(() => {
      this.content.scrollToBottom();
      this.newmessage = '';
    })
  }

  ionViewDidEnter() {
    this.chatservice.getbuddymessages();
  }

  scrollto() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 1000);
  }



}
