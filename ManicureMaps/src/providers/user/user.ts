
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  firedata = firebase.database().ref('/chatuser');
  constructor(public afireauth: AngularFireAuth) {
    //console.log('Hello UserProvider Provider');
  }

  adduser(newuser){
    var promise = new Promise((resolve, reject) => {
      this.afireauth.auth.createUserWithEmailAndPassword(newuser.email, newuser.password).then(() => {
        this.afireauth.auth.currentUser.updateProfile({
          displayName: newuser.displayName,
          photoURL: '',
        }).then(() => { 
          this.firedata.child(this.afireauth.auth.currentUser.uid).set({
            uid: this.afireauth.auth.currentUser.uid,
            displayName: newuser.displayName,
            photoURL: 'https://firebasestorage.googleapis.com/v0/b/manicuremaps.appspot.com/o/screen-ipad-landscape.png?alt=media&token=5915a394-5e7c-4572-88d5-a8992692fbe5'
          }).then (() => {
            resolve({ sucess: true});   
          }).catch((err) => {
            reject(err);   
          })
        }).catch((err) => {
          reject(err);
      })
    }).catch((err) => {
      reject(err);
    })
  })
  return promise;
}
}
