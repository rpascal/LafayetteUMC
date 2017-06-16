import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageHomeSliderComponent } from './manage-home-slider';

@NgModule({
  declarations: [
    ManageHomeSliderComponent,
  ],
  imports: [
    IonicPageModule.forChild(ManageHomeSliderComponent),
  ],
  exports: [
    ManageHomeSliderComponent
  ]
})
export class ManageHomeSliderComponentModule {}
