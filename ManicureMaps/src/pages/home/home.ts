import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ManicureLoginPage } from '../manicure/manicure-login/manicure-login';
import { UserLoginPage } from '../user/user-login/user-login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

    goToUserLogin(){
      this.navCtrl.push(UserLoginPage);
    }

    goToManicureLogin(){
      this.navCtrl.push(ManicureLoginPage);
    }

}
