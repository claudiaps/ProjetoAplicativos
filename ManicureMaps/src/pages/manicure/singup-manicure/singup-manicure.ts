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
    displayName: '',
    logradouro: '',
    numero: '',
    bairro: '',
    complemento: '',
    cidade: '',
    estado: '',
    atendimento: '',

  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public userservice: ManicureProvider,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  singnup() {
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });

     if (this.newuser.email == '' || this.newuser.password == '' || this.newuser.displayName == '' || this.newuser.logradouro == '' || this.newuser.numero == '' || this.newuser.bairro == '' || this.newuser.complemento == '' || this.newuser.cidade == '' || this.newuser.estado == '' || this.newuser.atendimento == '') {
      toaster.setMessage('Por Favor Preencha Todos os Campos!');
      toaster.present();
    }

    else if (this.newuser.password.length < 7) {
      toaster.setMessage('A Senha Deve Ter no Minimo 7 Digitos');
      toaster.present();
    }

    else {
      let loader = this.loadingCtrl.create({
        content: 'Por Favor Aguarde'
      });
      loader.present();
      this.userservice.adduser(this.newuser).then((res: any) => {
        loader.dismiss();
        if (res.sucess)
          this.navCtrl.push('ManicureProfileEpicPage');
        else
          console.log('Erro: ' , res);
      })
    }
  }

}
