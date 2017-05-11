import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Services } from './services';
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
