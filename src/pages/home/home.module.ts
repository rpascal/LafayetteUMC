import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Home } from './home';
import { HttpModule } from '@angular/http';

import { HeadingBarModule } from '../../components/heading-bar/heading-bar.module'
import { CalendarTemplateModule } from '../../components/calendar-template/calendar-template.module'
import { FullCalendar } from "../../providers/full-calendar";


import { HomeSliderProvider } from "../../providers/home-slider/home-slider";
import { FacebookModule } from 'ngx-facebook';



@NgModule({
  declarations: [
    Home,
  ],
  imports: [
    HttpModule,
    HeadingBarModule,
    CalendarTemplateModule,
    IonicPageModule.forChild(Home),
    FacebookModule.forRoot()
    // CalendarModule.forRoot()
  ],
  exports: [
    Home
  ],
  providers: [FullCalendar, HomeSliderProvider]
})
export class HomeModule { }
