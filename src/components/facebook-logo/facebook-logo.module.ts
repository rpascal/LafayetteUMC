import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { FacebookLogo } from './facebook-logo';

@NgModule({
  declarations: [
    FacebookLogo,
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    FacebookLogo
  ]
})
export class FacebookLogoModule { }
