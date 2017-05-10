import { Component, Input } from '@angular/core';

/**
 * Generated class for the FacebookLogo component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'facebook-logo',
  templateUrl: 'facebook-logo.html'
})
export class FacebookLogo {

  @Input('pageName') pageName;

  navigateToFacebook() {
    window.open('https://www.facebook.com/LafayetteUMC.net');
  }

}
