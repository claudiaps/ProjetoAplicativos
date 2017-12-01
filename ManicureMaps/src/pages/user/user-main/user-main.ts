import { Component } from '@angular/core';
import { IonicPage,} from 'ionic-angular';

/**
 * Generated class for the UserMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-main',
  templateUrl: 'user-main.html',
})
export class UserMainPage {
  tab1: string = "UserProfilePage";
  tab2: string = "UserManicurePage";
  tab3: string = "ChatUserPage";
}


  // searchQuery: string = ''; //barra de pesquisa
  // items: string[]; //barra de pesquisa

//  constructor(public navCtrl: NavController, public navParams: NavParams) {
   // this.initializeItems(); //barra de pesquisa
  

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad UserMainPage');
  // }

//   initializeItems() {
//     this.items = [
//       //arrumar um jeito de colocar os bairros aqui para poder pesquisar pelo bairro
//     ];
//   }

//   //barra de pesquisa
//   getItems(ev: any) {
//     // Reset items back to all of the items
//     this.initializeItems();

//     // set val to the value of the searchbar
//     let val = ev.target.value;

//     // if the value is an empty string don't filter the items
//     if (val && val.trim() != '') {
//       this.items = this.items.filter((item) => {
//         return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
//       })
//     }
//   }//até aqui b.p

// }


