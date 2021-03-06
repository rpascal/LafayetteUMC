import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
// import { CalendarComponent } from "ap-angular2-fullcalendar";
import { FullCalendar } from "../../providers/full-calendar";
import { CalendarTemplate, calendarViews } from '../../components/calendar-template/calendar-template'
import { Platform } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-main-calendar',
  templateUrl: 'main-calendar.html',
})
export class MainCalendar {

  @ViewChild("calendar") calendar: CalendarTemplate;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fullCalendar: FullCalendar,
    public platform: Platform) {

  }



  ionViewDidLoad() {

    if (this.platform.is('mobile')) {
      this.calendar.initilizeCalendar(this.fullCalendar.getListSettings(['lafayetteumcmailing@gmail.com']));
    } else {
      this.calendar.initilizeCalendar(this.fullCalendar.getMonthSettings(['lafayetteumcmailing@gmail.com']));

    }

  }

}
