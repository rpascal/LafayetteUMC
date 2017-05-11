import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact } from './contact';
import { HeadingBarModule } from '../../components/heading-bar/heading-bar.module'



@NgModule({
  declarations: [
    Contact,
  ],
  imports: [
    HeadingBarModule,
    IonicPageModule.forChild(Contact),
  ],
  exports: [
    Contact
  ]
})
export class ContactModule {}
