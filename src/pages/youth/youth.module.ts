import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Youth } from './youth';

@NgModule({
  declarations: [
    Youth,
  ],
  imports: [
    IonicPageModule.forChild(Youth),
  ],
  exports: [
    Youth
  ]
})
export class YouthModule {}
