import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { ManicureProvider } from '../../../providers/user/manicure';

/**
 * Generated class for the SingupManicurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-singup-manicure',
  templateUrl: 'singup-manicure.html',
})
export class SingupManicurePage {

  newuser = {
    email: '',
    password: '',
    displayName: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public userservice: ManicureProvider,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  singnup() {
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });

    if (this.newuser.email == '' || this.newuser.password == '' || this.newuser.displayName == '') {
      toaster.setMessage('Preencha Todos os campos');
      toaster.present();
    }

    else if (this.newuser.password.length < 7) {
      toaster.setMessage('Senha deve ter pelo menos 7 caracteres');
      toaster.present();
    }

    else {
      let loader = this.loadingCtrl.create({
        content: 'Aguarde'
      });
      loader.present();
      this.userservice.adduser(this.newuser).then((res: any) => {
        loader.dismiss();
        if (res.sucess)
          this.navCtrl.push('ManicureProfileEpicPage');
        else
          console.log('Error' , res);
      })
    }
  }

}
