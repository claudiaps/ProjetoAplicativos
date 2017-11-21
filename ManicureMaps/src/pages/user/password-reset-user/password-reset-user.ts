import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../../providers/user/user';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


/**
 * Generated class for the PasswordResetUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  
  selector: 'page-password-reset-user',
  templateUrl: 'password-reset-user.html',
})
export class PasswordResetUserPage {
  
  email: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userservice: UserProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordResetUserPage');
  }

  reset(){
    let alert = this.alertCtrl.create({
      buttons: ['ok']
    });
    this.userservice.passwordreset(this.email).then((res: any) => {
      if(res.success){
        console.log('Email Enviado');                                        
        alert.setTitle('Email Enviado');
        alert.setSubTitle('Por Favor Entre em Seu Email e Siga as Instruções para Recuperar a Senha');
        
      }
      else {
        console.log('Erro Resetar Senha'); 
        alert.setTitle('Erro');                                       
        alert.setSubTitle('Erro ao Recuperar a Senha\n Por Favor Tente Novamente');
      }
      alert.present(); 
    })
  }

}
