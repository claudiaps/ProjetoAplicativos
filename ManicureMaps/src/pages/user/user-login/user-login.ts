import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../../providers/auth/auth';

import { usercreds } from '../../../models/interface/usercreds';
import { PasswordResetManicurePage } from '../../manicure/password-reset-manicure/password-reset-manicure';


/**
 * Generated class for the ManicureLoginPage page.
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

  credentials = {} as usercreds;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authservive: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserLoginPage');
  }

  singin() {
    this.authservive.login(this.credentials).then ((res: any) => {
      if(!res.code)
        this.navCtrl.setRoot('UserMainPage');
      else
        alert(res);  
    })
  } 

  singup () {
    this.navCtrl.push('SingupUserPage');
  }

  passwordReset(){
    this.navCtrl.push(PasswordResetManicurePage);
  }

}

