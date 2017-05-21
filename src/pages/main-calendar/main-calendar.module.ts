import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainCalendar } from './main-calendar';
import { HeadingBarModule } from '../../components/heading-bar/heading-bar.module'
import { CalendarTemplateModule } from '../../components/calendar-template/calendar-template.module'
import { FullCalendar } from "../../providers/full-calendar";

@NgModule({
  declarations: [
    MainCalendar,
  ],
  imports: [
    HeadingBarModule,
    CalendarTemplateModule,
    IonicPageModule.forChild(MainCalendar),
  ],
  exports: [
    MainCalendar
  ],
  providers: [FullCalendar,]
})
export class MainCalendarModule { }
