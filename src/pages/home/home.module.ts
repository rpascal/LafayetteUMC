import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Home } from './home';


import { HeadingBarModule } from '../../components/heading-bar/heading-bar.module'
import { CalendarTemplateModule } from '../../components/calendar-template/calendar-template.module'
 import { FullCalendar } from "../../providers/full-calendar";

@NgModule({
  declarations: [
    Home,
  ],
  imports: [
    HeadingBarModule,
    CalendarTemplateModule,
    IonicPageModule.forChild(Home),
    
    // CalendarModule.forRoot()
  ], 
  exports: [
    Home
  ],
   providers:[FullCalendar,]
})
export class HomeModule { }
