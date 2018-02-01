import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FirebaseApp } from 'angularfire2';
import "firebase/storage";
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { UUID } from 'angular2-uuid';
import 'rxjs/add/operator/map'

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
    return this.fb.list(this.referencePath).snapshotChanges().map(itemList =>
      itemList.map(item => {
        try {
          var pathReference = storage.ref(item.payload.val().path);
          let result: Image = { $key: item.key, downloadURL: pathReference.getDownloadURL(), path: item.payload.val().path, filename: item.payload.val().filename };
          return result;
        } catch (err) {

        }
      })
    );

  }

  upload(file: File) {

    let storageRef = this.firebase.storage().ref();

    // let success = false;
    // let files = (<HTMLInputElement>document.getElementById('file')).files;
    // for (let i = 0; i < files.length; i++) {
    // let selectedFile = files[i];

    let uuid = UUID.UUID();



    let selectedFile = file;
    // selectedFile. = uuid + selectedFile.name;
    let af = this.fb;
    let folder = this.referencePath;
    let path = `/${this.referencePath}/${uuid}/${selectedFile.name}`;
    var iRef = storageRef.child(path);
    iRef.put(selectedFile).then((snapshot) => {
      af.list(`/${folder}/`).push({ path: path, filename: uuid + "/" + selectedFile.name })
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
