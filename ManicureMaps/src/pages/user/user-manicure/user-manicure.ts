import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { ManicureProvider } from '../../../providers/user/manicure';
import { RequestsProvider } from '../../../providers/requests/requests';
import { connreq } from './../../../models/interface/request';
import firebase from 'firebase';


/**
 * Generated class for the UserManicurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-manicure',
  templateUrl: 'user-manicure.html',
})
export class UserManicurePage {
  newrequest = {} as connreq;
  temparr = [];
  filtereduser = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public userservice: ManicureProvider,
  public alertCtrl: AlertController, public requestservice: RequestsProvider) {
    this.userservice.getallusers().then((res: any) => {
      this.filtereduser = res;
      this.temparr = res;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserManicurePage');
  }

  searchuser(searchbar){
    this.filtereduser = this.temparr
    var q = searchbar.target.value;
    if(q.trim() == ''){
      return;
    }

    this.filtereduser = this.filtereduser.filter((v) => {
      if((v.displayName.toLowerCase().indexOf(q.toLowerCase())) > -1){
        return true;
      }
      return false;
    })
  }

  sendreq(recipient) {
    this.newrequest.sender = firebase.auth().currentUser.uid;
    this.newrequest.recipient = recipient.uid;
    if (this.newrequest.sender === this.newrequest.recipient)
      alert('You are your friend always');
    else {
      let successalert = this.alertCtrl.create({
        title: 'Request sent',
        subTitle: 'Your request was sent to ' + recipient.displayName,
        buttons: ['ok']
      });
      this.requestservice.sendrequest(this.newrequest).then((res: any) => {
        if (res.success) {
          successalert.present();
          let sentuser = this.filtereduser.indexOf(recipient);
          this.filtereduser.splice(sentuser, 1);
        }
      }).catch((err) => {
        alert(err);
      })

    }
  }



}
