import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FirebaseApp } from 'angularfire2';

import "firebase/storage";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the ImageSliderProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ImageSliderProvider {


  firebase: any;


  constructor( @Inject(FirebaseApp) firebaseApp: any
    , public afDB: AngularFireDatabase) {
    this.firebase = firebaseApp;
  }

  public getImage() {
    return new Promise<any[]>((resolve, reject) => {
      let urls: Array<string> = [];
      console.log('hi')
      this.afDB.list('/homeImages').subscribe(data => {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
          const storageRef = this.firebase.storage().ref().child("homeSlider/" + data[i].$value);
          storageRef.getDownloadURL().then(url => {
            urls.push(url);
            if (urls.length == data.length)
              resolve(urls);
          });
          //storageRef.getDownloadURL().then(callback);
        }
        console.log("yo")
        // data.forEach(item => {
        //   const storageRef = this.firebase.storage().ref().child(item.$value);
        //   storageRef.getDownloadURL().then(url => {
        //     urls.push(url);
        //   });
        // });

      });
    });
  }



  public uploadImage(name, data) {
    let promise = new Promise((res, rej) => {
      let fileName = name + ".jpg";
      let uploadTask = this.firebase.storage().ref(`/posts/${fileName}`).put(data);
      uploadTask.on('state_changed', function (snapshot) {
      }, function (error) {
        rej(error);
      }, function () {
        var downloadURL = uploadTask.snapshot.downloadURL;
        res(downloadURL);
      });
    });
    return promise;
  }


}
