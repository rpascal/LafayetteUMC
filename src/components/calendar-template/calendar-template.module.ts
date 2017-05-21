import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { CalendarTemplate } from './calendar-template';
import { CalendarModule } from "ap-angular2-fullcalendar";



@NgModule({
  declarations: [
    CalendarTemplate,
  ],
  imports: [
    CalendarModule.forRoot(),
    IonicModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    CalendarTemplate
  ]
})
export class CalendarTemplateModule { }
