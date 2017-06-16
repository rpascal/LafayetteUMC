import { Component, Input, Inject } from '@angular/core';
// import { Router } from '@angular/router';
// import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';

import { FirebaseApp } from 'angularfire2';
//declare var firebase: any;

// import {} from '../../providers/home-slider/home-slider'

interface Image {
  path: string;
  filename: string;
  downloadURL?: string;
  $key?: string;
}

@Component({
  selector: 'upload',
  templateUrl: 'upload.html'
})
export class UploadComponent {

  firebase: any;


  folder : string = 'homeSlider';


  fileList: FirebaseListObservable<Image[]>;
  imageList: Observable<Image[]>;

  constructor( @Inject(FirebaseApp) firebaseApp: any, public af: AngularFireDatabase) {
    this.firebase = firebaseApp;
  }

  ngOnInit() {


    let storage = this.firebase.storage();

    this.fileList = this.af.list(`/${this.folder}/`);

    this.imageList = this.fileList.map(itemList =>
      itemList.map(item => {

        var pathReference = storage.ref(item.path);
       // console.log(pathReference)
        let result = { $key: item.$key, downloadURL: pathReference.getDownloadURL(), path: item.path, filename: item.filename };
        // console.log(result);
        return result;
      })
    );

  }

  ngOnChanges() {

  }


  upload() {

    let storageRef = this.firebase.storage().ref();

    let success = false;
    let files = (<HTMLInputElement>document.getElementById('file')).files;
    for (let i = 0; i < files.length; i++) {
      let selectedFile = files[i];
      let af = this.af;
      let folder = this.folder;
      let path = `/${this.folder}/${selectedFile.name}`;
      var iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        af.list(`/${folder}/`).push({ path: path, filename: selectedFile.name })
      });

    }


  }
  delete(image: Image) {
    let storagePath = image.path;
    let referencePath = `${this.folder}/` + image.$key;

    // Do these as two separate steps so you can still try delete ref if file no longer exists

    // Delete from Storage
    this.firebase.storage().ref().child(storagePath).delete()
      .then(
      () => { },
      (error) => console.error("Error deleting stored file", storagePath)
      );

    // Delete references
    this.af.object(referencePath).remove()



  }

}
