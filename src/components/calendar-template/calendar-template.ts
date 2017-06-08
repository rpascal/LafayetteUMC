import { Component, Input, ViewChild } from '@angular/core';
import { CalendarComponent } from "ap-angular2-fullcalendar";
import { Http, HttpModule, Response } from '@angular/http';

// import * as $ from 'jquery';
declare var fullCalendar;
declare var $: any

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

  }

  initilizeCalendar(settings) {
    $('#calendar').fullCalendar(settings);
    this.calendarInitilized = true;
  }


  initilizeCalenar(settings) {

    // settings.defaultView = settings.defaultView || 'month';

    this.GoogleCalendarProvider.getListCalendar("ashland.edu_qr6j6r8ktce3ca9gs2io8qqkd4@group.calendar.google.com").then(calendarOptions => {
      //   console.log(calendarOptions)
      this.calendarInitilized = true;
      // $('#calendar').fullCalendar(calendarOptions);
      // console.log("after")

      $('#calendar').fullCalendar({
        defaultView: 'listWeek',
        googleCalendarApiKey: 'AIzaSyCIwgW_o0spPcW92j7zM2tBo20cSlaHe5k',
        events: 'ashland.edu_qr6j6r8ktce3ca9gs2io8qqkd4@group.calendar.google.com',
        eventClick: function (event) {
          // opens events in a popup window
          window.open(event.url, 'gcalevent');
          return false;
        },

        loading: function (bool) {
          $('#loading').toggle(bool);
        }

      });

      console.log('inti')


    });


    // this.GoogleCalendarProvider.getEvents("ashland.edu_qr6j6r8ktce3ca9gs2io8qqkd4@group.calendar.google.com",(res) => {
    //   this.calendarOptions = {
    //     // height: 'auto',
    //     contentHeight: 'auto',
    //     defaultView: settings.defaultView,
    //     eventClick: function (event) {
    //       // opens events in a popup window
    //       window.open(event.url, 'gcalevent');
    //       return false;
    //     },

    //     // fixedWeekCount: false,
    //     //defaultDate: '2016-09-12',
    //     // editable: true,
    //     // eventLimit: 5,
    //     // eventLimit: true, // allow "more" link when too many events
    //     events: res
    //   };
    //     this.calendarInitilized = true;
    //   $('#calendar').fullCalendar({
    //     // height: 'auto',
    //    // contentHeight: 'auto',
    //     defaultView: settings.defaultView,
    //     eventClick: function (event) {
    //       // opens events in a popup window
    //       window.open(event.url, 'gcalevent');
    //       return false;
    //     },

    //     // fixedWeekCount: false,
    //     //defaultDate: '2016-09-12',
    //     // editable: true,
    //     // eventLimit: 5,
    //     // eventLimit: true, // allow "more" link when too many events
    //     events: res
    //   });

    //  });

    // this.GoogleCalendarProvider.getEvents("ashland.edu_qr6j6r8ktce3ca9gs2io8qqkd4@group.calendar.google.com", events => {
    //   let calendarOptions: Object = {
    //     // height: 'auto',
    //     contentHeight: 'auto',
    //     defaultView: settings.defaultView,
    //     eventClick: function (event) {
    //       window.open(event.url, 'gcalevent');
    //       return false;
    //     },
    //     events: events
    //   };
    //   // console.log('hi')
    //   this.calendarInitilized = true;
    //   ($('#calendar')).fullCalendar(calendarOptions);
    //   // console.log(calendarOptions)
    //   //resolve(calendarOptions);
    // });



  }


}
