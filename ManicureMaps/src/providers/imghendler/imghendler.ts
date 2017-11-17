import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import firebase from 'firebase';
import { processRecords } from 'ionic-angular/components/virtual-scroll/virtual-util';


/*
  Generated class for the ImghendlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ImghendlerProvider {
  nativepath: any;
  firestore = firebase.storage();
  constructor(public filechooser: FileChooser) {
    console.log('Hello ImghendlerProvider Provider');
  }

  uploadimage() {
    var promise = new Promise((resolve, reject) => {

      this.filechooser.open().then((url) => {
        (<any>window).FilePath.resolveNativePath(url, (result) => {
          this.nativepath = result;
          (<any>window).resolveLocalFileSystemURL(this.nativepath, (res) => {
            res.file((resFile) => {
              var reader = new FileReader();
              reader.readAsArrayBuffer(resFile);
              reader.onloadend = (evt: any) => {
                var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                var imageStore = this.firestore.ref('/profileimages').child(firebase.auth().currentUser.uid);
                imageStore.put(imgBlob).then((res) => {
                  this.firestore.ref('profileimages').child(firebase.auth().currentUser.uid).getDownloadURL().then ((url) => {
                    resolve(url);
                  }).catch((err) => {
                    reject(err);
                  })
                }).catch((err) => {
                  alert(err);
                })
              }
            })
          })
        })
      })
    })
    return promise;
  }
}
