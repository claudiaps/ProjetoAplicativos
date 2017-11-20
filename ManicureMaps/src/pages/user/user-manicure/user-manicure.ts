import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ManicureProvider } from '../../../providers/user/manicure';

/**
 * Generated class for the UserManicurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-manicure',
  templateUrl: 'user-manicure.html',
})
export class UserManicurePage {
  temparr = [];
  filtereduser = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public userservice: ManicureProvider) {
    this.userservice.getallusers().then((res: any) => {
      this.filtereduser = res;
      this.temparr = res;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserManicurePage');
  }

  searchuser(searchbar){
    this.filtereduser = this.temparr
    var q = searchbar.target.value;
    if(q.trim() == ''){
      return;
    }

    this.filtereduser = this.filtereduser.filter((v) => {
      if((v.displayName.toLowerCase().indexOf(q.toLowerCase())) > -1){
        return true;
      }
      return false;
    })
  }

}
