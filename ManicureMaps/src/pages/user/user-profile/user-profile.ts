import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ImghendlerProvider } from '../../../providers/imghendler/imghendler';
import { UserProvider } from '../../../providers/user/user';
import firebase from 'firebase';


/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
  imgurl = 'https://firebasestorage.googleapis.com/v0/b/manicuremaps.appspot.com/o/screen-ipad-landscape.png?alt=media&token=5915a394-5e7c-4572-88d5-a8992692fbe5'  
  avatar: string;
  displayName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userservice: UserProvider,
    public zone: NgZone, public alertCtrl: AlertController, public imghandler: ImghendlerProvider, public loadingCtrl: LoadingController) {
  }

  ionViewWillEnter() {
    this.loaduserdetails();
  }

  loaduserdetails() {
    this.userservice.getuserdetails().then((res: any) => {
      this.displayName = res.displayName;
      this.zone.run(() => {
        this.avatar = res.photoURL;
      })
    })
  }

  editname() {
    let statusalert = this.alertCtrl.create({
      buttons: ['ok']
    });
    let alert = this.alertCtrl.create({
      title: 'Editar Nome',
      inputs: [{
        name: 'nickname',
        placeholder: 'Nome'
      }],
      buttons: [{
        text: 'cancel',
        role: 'cancel',
        handler: data => {
        }
      },
      {
        text: 'Edit',
        handler: data => {
          if (data.nickname) {
            (
              this.userservice.updatedisplayname(data.nickname).then((res: any) => {
                if (res.success) {
                  statusalert.setTitle('Atualização');
                  statusalert.setSubTitle('Nome Atualizado com Sucesso');
                  statusalert.present();
                  this.zone.run(() => {
                    this.displayName = data.nickname
                  })
                }
                else {
                  statusalert.setTitle('Erro');
                  statusalert.setSubTitle('Erro ao Atualizar o Nome\n Por Favor Tente Novamente');
                  statusalert.present();
                }
              })
            )
          }
        }
      }]
    });
    alert.present();
  }

  editimage() {
    let statusalert = this.alertCtrl.create({
      buttons: ['ok']
    });
    this.imghandler.uploadimage().then((url: any) => {
      this.userservice.updateimage(url).then((res: any) => {
        
        if (res.success) {
          statusalert.setTitle('Atualização');
          statusalert.setSubTitle('Foto Atualizada com Sucesso');
          statusalert.present();
          this.zone.run(() => {
            this.avatar = url;
          })
        }
      }).catch((err) => {
          statusalert.setTitle('Erro');
          statusalert.setSubTitle('Erro ao Atualizar a Foto\n Por Favor Tente Novamente');
          statusalert.present();
      })
    })
  }


  logout() {
    firebase.auth().signOut().then(() => {
      this.navCtrl.setRoot('UserLoginPage');
    })
  }

}
