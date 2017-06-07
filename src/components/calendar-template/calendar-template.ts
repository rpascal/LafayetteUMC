import { Component, Input, ViewChild } from '@angular/core';
import { CalendarComponent } from "ap-angular2-fullcalendar";
import { Http, HttpModule, Response } from '@angular/http';

import * as $ from 'jquery';
declare var fullCalendar;


import { GoogleCalendarProvider } from "../../providers/google-calendar/google-calendar";

export enum calendarViews {
  month,
  basicWeek,
  basicDay,
  agendaWeek,
  agendaDay,
  listYear,
  listMonth,
  listWeek,
  listDay
}





@Component({
  selector: 'calendar-template',
  templateUrl: 'calendar-template.html'
})
export class CalendarTemplate {

  calendarInitilized: boolean = false;

  private calendarOptions: Object;
  constructor(private http: Http, public GoogleCalendarProvider: GoogleCalendarProvider) {
    // this.getData()
  }


  initilizeCalenar(settings) {

    settings.defaultView = settings.defaultView || 'month';

    this.GoogleCalendarProvider.getEvents((res) => {
      this.calendarOptions = {
        // height: 'auto',
        contentHeight: 'auto',
        defaultView: settings.defaultView,
        eventClick: function (event) {
          // opens events in a popup window
          window.open(event.url, 'gcalevent');
          return false;
        },

        // fixedWeekCount: false,
        //defaultDate: '2016-09-12',
        // editable: true,
        // eventLimit: 5,
        // eventLimit: true, // allow "more" link when too many events
        events: res
      };
      $('#calendar').fullCalendar(this.calendarOptions);
    });

    this.calendarInitilized = true;
  }


}
