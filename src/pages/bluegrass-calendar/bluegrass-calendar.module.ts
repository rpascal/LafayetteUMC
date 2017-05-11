import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BluegrassCalendar } from './bluegrass-calendar';
import { HeadingBarModule } from '../../components/heading-bar/heading-bar.module'



@NgModule({
  declarations: [
    BluegrassCalendar,
  ],
  imports: [
    HeadingBarModule,
    IonicPageModule.forChild(BluegrassCalendar),
  ],
  exports: [
    BluegrassCalendar
  ]
})
export class BluegrassCalendarModule {}
