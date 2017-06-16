import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FirebaseApp } from 'angularfire2';
import "firebase/storage";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';



export interface Image {
  path: string;
  filename: string;
  downloadURL?: string;
  $key?: string;
}

@Injectable()
export class HomeSliderProvider {

  private referencePath = 'homeSlider'

  private firebase: any;

  constructor( @Inject(FirebaseApp) firebaseApp: any, public http: Http, public fb: AngularFireDatabase) {
    this.firebase = firebaseApp;
  }


  getImages(): Observable<Image[]> {
    let storage = this.firebase.storage();
    return this.fb.list(this.referencePath).map(itemList =>
      itemList.map(item => {
        var pathReference = storage.ref(item.path);
        let result: Image = { $key: item.$key, downloadURL: pathReference.getDownloadURL(), path: item.path, filename: item.filename };
        return result;
      })
    );

  }

  upload(file : File) {

    let storageRef = this.firebase.storage().ref();

    // let success = false;
    // let files = (<HTMLInputElement>document.getElementById('file')).files;
    // for (let i = 0; i < files.length; i++) {
      // let selectedFile = files[i];

      let selectedFile = file;
      let af = this.fb;
      let folder = this.referencePath;
      let path = `/${this.referencePath}/${selectedFile.name}`;
      var iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        af.list(`/${folder}/`).push({ path: path, filename: selectedFile.name })
      });

    //}


  }
  delete(image: Image) {
    let storagePath = image.path;
    let referencePath = `${this.referencePath}` + '/' + image.$key;

    this.firebase.storage().ref().child(storagePath).delete()
      .then(
      () => { },
      (error) => console.error("Error deleting stored file", storagePath)
      );

    this.fb.object(referencePath).remove()
  }



}
