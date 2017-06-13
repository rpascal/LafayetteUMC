import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Home } from './home';
import { HttpModule } from '@angular/http';

import { HeadingBarModule } from '../../components/heading-bar/heading-bar.module'
import { CalendarTemplateModule } from '../../components/calendar-template/calendar-template.module'
 import { FullCalendar } from "../../providers/full-calendar";

import { ImageSliderProvider } from "../../providers/image-slider/image-slider";




@NgModule({
  declarations: [
    Home,
  ],
  imports: [
    HttpModule,
    HeadingBarModule,
    CalendarTemplateModule,
    IonicPageModule.forChild(Home),
    
    // CalendarModule.forRoot()
  ], 
  exports: [
    Home
  ],
   providers:[FullCalendar,ImageSliderProvider]
})
export class HomeModule { }
