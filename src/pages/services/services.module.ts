import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Services } from './services';
import {FacebookLogoModule} from '../../components/facebook-logo/facebook-logo.module'
import { HeadingBarModule } from '../../components/heading-bar/heading-bar.module'


@NgModule({
  declarations: [
    Services,
  ],
  imports: [
    HeadingBarModule,
    IonicPageModule.forChild(Services),
  ],
  exports: [
    Services
  ]
})
export class ServicesModule {}
