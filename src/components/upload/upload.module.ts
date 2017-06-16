import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadComponent } from './upload';

@NgModule({
  declarations: [
    UploadComponent,
  ],
  imports: [
    IonicPageModule.forChild(UploadComponent),
  ],
  exports: [
    UploadComponent
  ]
})
export class UploadComponentModule {}
