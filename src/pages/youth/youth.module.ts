import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Youth } from './youth';
import { HeadingBarModule } from '../../components/heading-bar/heading-bar.module'

@NgModule({
  declarations: [
    Youth,
  ],
  imports: [
    HeadingBarModule,
    IonicPageModule.forChild(Youth),
  ],
  exports: [
    Youth
  ]
})
export class YouthModule {}
