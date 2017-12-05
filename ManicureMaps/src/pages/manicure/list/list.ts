import { ListProvider } from './../../../providers/list/list';
import  firebase  from 'firebase';
//import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  title: string;
  form: FormGroup;
  item: any;


  constructor( public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: ListProvider,
    private toast: ToastController) {
    
      this.item  = this.navParams.data.item || {};
      this.createForm();
      this.setupPageTitle();

      
  }

  private setupPageTitle(){
    this.title = this.navParams.data.item ? 'Alterando item' : 'Novo item';
  }
  
  createForm (){
    this.form = this.formBuilder.group({
      key: [this.item.key],
      titulo: [this.item.titulo, Validators.required],
      subtitulo: [this.item.subtitulo, Validators.required],
    });
  }

  onSubmit() {
    if(this.form.valid){
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Item salvo com suceso', duration: 3000}).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro al salvar o contato', duration: 3000}).present();          
          console.error(e);
        });
    }
  }

}
