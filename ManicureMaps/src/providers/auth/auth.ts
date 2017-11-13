
import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { usercreds } from '../../models/interface/usercreds';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public afireauth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }


//usa as credenciais pra logar, e retorna bom ou não bom dependendo do login
  login(credentials: usercreds){
    var promise = new Promise((resolve, reject) => {
      this.afireauth.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then (() => {
        resolve(true);
      }).catch((err) =>{
        reject(err);
      })
    })

    return promise;
  }
 
}
