import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainCalendar } from './main-calendar';
import { HeadingBarModule } from '../../components/heading-bar/heading-bar.module'


@NgModule({
  declarations: [
    MainCalendar,
  ],
  imports: [
    HeadingBarModule,
    IonicPageModule.forChild(MainCalendar),
  ],
  exports: [
    MainCalendar
  ]
})
export class MainCalendarModule {}
