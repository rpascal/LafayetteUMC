import { Component, Input } from '@angular/core';

@Component({
  selector: 'heading-bar',
  templateUrl: 'heading-bar.html'
})
export class HeadingBar {

  @Input('pageName') pageName;

  navigateToFacebook() {
    window.open('https://www.facebook.com/LafayetteUMC.net');
  }


}
