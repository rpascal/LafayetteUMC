import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Home } from './home';
import { HttpModule } from '@angular/http';

import { HeadingBarModule } from '../../components/heading-bar/heading-bar.module'
import { CalendarTemplateModule } from '../../components/calendar-template/calendar-template.module'
import { FullCalendar } from "../../providers/full-calendar";


import { HomeSliderProvider } from "../../providers/home-slider/home-slider";

 

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
  providers: [FullCalendar, HomeSliderProvider]
})
export class HomeModule { }
