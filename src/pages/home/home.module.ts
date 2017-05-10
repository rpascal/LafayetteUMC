import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Home } from './home';

import { CalendarModule } from "ap-angular2-fullcalendar";
import { HeadingBarModule } from '../../components/heading-bar/heading-bar.module'


@NgModule({
  declarations: [
    Home,
  ],
  imports: [
    HeadingBarModule,
    IonicPageModule.forChild(Home),
    CalendarModule.forRoot()
  ],
  exports: [
    Home
  ]
})
export class HomeModule { }
