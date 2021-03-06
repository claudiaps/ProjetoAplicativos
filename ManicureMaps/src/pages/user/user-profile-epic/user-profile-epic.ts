import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ImghendlerProvider } from '../../../providers/imghendler/imghendler'
import { UserProvider } from '../../../providers/user/user'
import { UserMainPage } from '../user-main/user-main';

/**
 * Generated class for the ManicureProfileEpicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile-epic',
  templateUrl: 'user-profile-epic.html',
})
export class UserProfileEpicPage {
  imgurl = 'https://firebasestorage.googleapis.com/v0/b/manicuremaps.appspot.com/o/screen-ipad-landscape.png?alt=media&token=5915a394-5e7c-4572-88d5-a8992692fbe5'
  moveon = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public imgservice: ImghendlerProvider,
  public zone: NgZone, public userservice: UserProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManicureProfileEpicPage');
  }

  chooseimage() {
    let loader = this.loadingCtrl.create({
      content: 'please wait'
    })
    loader.present();
    this.imgservice.uploadimage().then((uploadedurl: any) => {
      loader.dismiss();
      this.imgurl = uploadedurl;
      this.zone.run(() => {
        this.imgurl = uploadedurl;
        this.moveon = false;
      })
    })
  }

  updateproceed() {
    let loader = this.loadingCtrl.create({
      content: 'please wait'
    })
    loader.present();
    this.userservice.updateimage(this.imgurl).then((res: any) => {
      loader.dismiss();
      if(res.success){
        this.navCtrl.setRoot('UserMainPage');
      }
      else{
        alert('Erro na Atualização do Perfil\n Por Favor Tente Novamente');
      }
    })
  }

  proceed() {
    this.navCtrl.setRoot('UserMainPage');
  }

}
