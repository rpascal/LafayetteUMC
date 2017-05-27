import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact } from './contact';
import { HeadingBarModule } from '../../components/heading-bar/heading-bar.module'
import { Email } from '../../providers/email';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    Contact,
  ],
  imports: [
    HeadingBarModule,
    HttpModule,
    IonicPageModule.forChild(Contact),
  ],
  exports: [
    Contact
  ],
  providers:[Email]
})
export class ContactModule {}
