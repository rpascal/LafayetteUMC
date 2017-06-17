import { Component , ViewChild} from '@angular/core';
import { HomeSliderProvider, Image } from '../../providers/home-slider/home-slider'
import { Observable } from 'rxjs';

@Component({
  selector: 'manage-home-slider',
  templateUrl: 'manage-home-slider.html'
})
export class ManageHomeSliderComponent {

  imageList: Observable<Image[]>;


@ViewChild('form') form;

  public buttonDisabled = false;
  constructor(public hs: HomeSliderProvider) {

  }

  ngOnInit() {
    this.imageList = this.hs.getImages();
  }

  upload() {
    this.buttonDisabled = true;
    let files = (<HTMLInputElement>document.getElementById('file')).files;
    for (let i = 0; i < files.length; i++) {
      let selectedFile = files[i];
      this.hs.upload(selectedFile);
    }
    
    this.form.nativeElement.reset()
    this.buttonDisabled = false;
  }
  delete(image: Image) {
    this.hs.delete(image);
  }

}
