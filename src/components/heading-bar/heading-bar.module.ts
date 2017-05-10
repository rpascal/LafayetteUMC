import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { HeadingBar } from './heading-bar';

@NgModule({
  declarations: [
    HeadingBar,
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    HeadingBar
  ]
})
export class HeadingBarModule {}
