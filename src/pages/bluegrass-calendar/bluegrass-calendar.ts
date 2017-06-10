import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FullCalendar } from "../../providers/full-calendar";
import { CalendarTemplate, calendarViews } from '../../components/calendar-template/calendar-template'
import { Platform } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-bluegrass-calendar',
  templateUrl: 'bluegrass-calendar.html',
})
export class BluegrassCalendar {

  @ViewChild("calendar") calendar: CalendarTemplate;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fullCalendar: FullCalendar,
    public platform: Platform) {
  }


  ionViewDidLoad() {

    if (this.platform.is('mobile')) {
      this.calendar.initilizeCalendar(this.fullCalendar.getListSettings(['ashland.edu_sd7ubri1p9i1anf37hkiig4aq0@group.calendar.google.com']));
    } else {
      this.calendar.initilizeCalendar(this.fullCalendar.getMonthSettings(['ashland.edu_sd7ubri1p9i1anf37hkiig4aq0@group.calendar.google.com']));
    }

  }

}
