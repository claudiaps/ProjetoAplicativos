import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ListProvider } from '../../../providers/list/list';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ListManicurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-manicure',
  templateUrl: 'list-manicure.html',
})
export class ListManicurePage {

  itens: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private provider: ListProvider, private toast: ToastController) {

    this.itens = this.provider.getAll();

  }

  newItem(){
    this.navCtrl.push('ListPage');
  }

  editItem(item: any){
    this.navCtrl.push('ListPage', {item: item});
  }

  removeItem(key: string){
    this.provider.remove(key)
      .then(() => {
        this.toast.create({ message: 'Item salvo com suceso', duration: 3000}).present();        
      })
      .catch((e) => {
        this.toast.create({ message: 'Erro', duration: 3000}).present();
        
        
      })
  }
}
