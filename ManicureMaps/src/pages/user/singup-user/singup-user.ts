import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { UserProvider } from '../../../providers/user/user';

/**
 * Generated class for the SingupManicurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-singup-user',
  templateUrl: 'singup-user.html',
})
export class SingupUserPage {

  newuser = {
    email: '',
    password: '',
    displayName: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public userservice: UserProvider,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  singnup() {
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });

    if (this.newuser.email == '' || this.newuser.password == '' || this.newuser.displayName == '') {
      toaster.setMessage('All fields are required');
      toaster.present();
    }

    else if (this.newuser.password.length < 7) {
      toaster.setMessage('Password is not strong, try again');
      toaster.present();
    }

    else {
      let loader = this.loadingCtrl.create({
        content: 'Please Wait'
      });
      loader.present();
      this.userservice.adduser(this.newuser).then((res: any) => {
        loader.dismiss();
        if (res.sucess)
          this.navCtrl.push('UserProfileEpicPage');
        else
          console.log('Error' , res);
      })
    }
  }


}
