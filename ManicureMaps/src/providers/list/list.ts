import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class ListProvider {
  private PATH = 'list/';
  
  constructor(private db: AngularFireDatabase) {
  }

  getAll(){
    return this.db.list(this.PATH)
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({key: c.payload.key, ...c.payload.val() }));
      })
  }

  save(item: any){
    return new Promise((resolve, reject) => {
      if(item.key){
        this.db.list(this.PATH)
          .update(item.key, { titulo: item.titulo, subtitulo: item.subtitulo })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else{
          this.db.list(this.PATH)
            .push({ titulo: item.titulo, subtitulo: item.subtitulo })
            .then(() => resolve());
      }
    })
  }

  remove(key: string){
    return this.db.list(this.PATH).remove(key);
  }

}
