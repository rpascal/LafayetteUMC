import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BluegrassCalendar } from './bluegrass-calendar';
import { HeadingBarModule } from '../../components/heading-bar/heading-bar.module'

import { CalendarTemplateModule } from '../../components/calendar-template/calendar-template.module'
import { FullCalendar } from "../../providers/full-calendar";

@NgModule({
  declarations: [
    BluegrassCalendar,
  ],
  imports: [
    HeadingBarModule,
    CalendarTemplateModule,
    IonicPageModule.forChild(BluegrassCalendar),
  ],
  exports: [
    BluegrassCalendar
  ],
  providers: [FullCalendar,]
})
export class BluegrassCalendarModule { }
