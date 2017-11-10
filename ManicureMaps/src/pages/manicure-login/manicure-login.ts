import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ManicureMainPage } from '../manicure-main/manicure-main';
import { SingupManicurePage } from '../singup-manicure/singup-manicure';



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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManicureLoginPage');
  }

  goToManicureMain(){
    this.navCtrl.push(ManicureMainPage);
  }

  goToSingupManicure(){
    this.navCtrl.push(SingupManicurePage);
  }

}
