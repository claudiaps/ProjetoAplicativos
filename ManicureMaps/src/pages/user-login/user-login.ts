import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserMainPage } from '../user-main/user-main';
import { SingupUserPage } from '../singup-user/singup-user';


/**
 * Generated class for the UserLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-login',
  templateUrl: 'user-login.html',
})
export class UserLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserLoginPage');
  }

  goToUserMain(){
    this.navCtrl.push(UserMainPage);
  }

  goToUserSingup(){
    this.navCtrl.push(SingupUserPage);
  }

}
