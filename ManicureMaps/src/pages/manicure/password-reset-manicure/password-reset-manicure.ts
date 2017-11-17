import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ManicureProvider } from '../../../providers/user/manicure';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


/**
 * Generated class for the PasswordResetManicurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password-reset-manicure',
  templateUrl: 'password-reset-manicure.html',
})
export class PasswordResetManicurePage {
  email: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public userservice: ManicureProvider, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordResetManicurePage');
  }

  reset(){
    let alert = this.alertCtrl.create({
      buttons: ['ok']
    });
    this.userservice.passwordreset(this.email).then((res: any) => {
      if(res.success){
        console.log('entrou felz');                                        
        alert.setTitle('Email sent');
        alert.setSubTitle('Please open your email and follow de instructions to change the password');
        
      }
      else {
        console.log('sdasd');                                        
        alert.setTitle('Failed');
      }
      alert.present(); 
    })
  }
  
}
