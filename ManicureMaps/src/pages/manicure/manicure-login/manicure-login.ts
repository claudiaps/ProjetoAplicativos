import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { AuthProvider } from '../../../providers/auth/auth';

import { usercreds } from '../../../models/interface/usercreds';
import { PasswordResetManicurePage } from '../password-reset-manicure/password-reset-manicure';

/**
 * Generated class for the ManicureLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manicure-login',
  templateUrl: 'manicure-login.html',
})
export class ManicureLoginPage {

  credentials = {} as usercreds;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public authservive: AuthProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManicureLoginPage');
  }

  singin() {
    this.authservive.login(this.credentials).then ((res: any) => {
      if(!res.code){
        this.navCtrl.setRoot('ManicureMainPage');
      }
      else
        alert(res);  
    })
  } 

  singup () {
    this.navCtrl.push('SingupManicurePage');
  }

  passwordReset(){
    this.navCtrl.push(PasswordResetManicurePage);
  }

}
