import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { CalendarTemplate } from './calendar-template';





@NgModule({
  declarations: [
    CalendarTemplate,
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    CalendarTemplate
  ]
})
export class CalendarTemplateModule { }
