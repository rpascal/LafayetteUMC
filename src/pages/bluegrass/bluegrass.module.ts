import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bluegrass } from './bluegrass';
import { HeadingBarModule } from '../../components/heading-bar/heading-bar.module'



@NgModule({
  declarations: [
    Bluegrass,
  ],
  imports: [
    HeadingBarModule,
    IonicPageModule.forChild(Bluegrass),
  ],
  exports: [
    Bluegrass
  ]
})
export class BluegrassModule {}
