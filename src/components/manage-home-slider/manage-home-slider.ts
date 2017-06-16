import { Component } from '@angular/core';
import {HomeSliderProvider, Image} from '../../providers/home-slider/home-slider'
import { Observable } from 'rxjs';

@Component({
  selector: 'manage-home-slider',
  templateUrl: 'manage-home-slider.html'
})
export class ManageHomeSliderComponent {

  imageList: Observable<Image[]>;

  constructor(public hs : HomeSliderProvider) {

  }

  ngOnInit() {
    this.imageList = this.hs.getImages();
  }

  upload() {
    let files = (<HTMLInputElement>document.getElementById('file')).files;
    for (let i = 0; i < files.length; i++) {
      let selectedFile = files[i];
      this.hs.upload(selectedFile);
    }
  }
  delete(image: Image) {
    this.hs.delete(image);
  }

}
