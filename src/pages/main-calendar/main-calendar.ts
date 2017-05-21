import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
// import { CalendarComponent } from "ap-angular2-fullcalendar";
import { FullCalendar } from "../../providers/full-calendar";
import { CalendarTemplate, calendarViews } from '../../components/calendar-template/calendar-template'
/**
 * Generated class for the MainCalendar page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-main-calendar',
  templateUrl: 'main-calendar.html',
})
export class MainCalendar {

  @ViewChild("calendar") calendar: CalendarTemplate;
  private googleCalendarData: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fullCalendar: FullCalendar) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.googleCalendarData = this.fullCalendar.getBasicCalendarData(calendarViews[calendarViews.month]);
      this.calendar.initilizeCalenar(this.googleCalendarData);
    }, 1000)

    // setTimeout(() => {
    //   this.calendar.changeView(calendarViews.agendaWeek);
    // }, 3000)

    console.log(this.googleCalendarData)
  }

}
