import { Component, Input, ViewChild } from '@angular/core';
import { CalendarComponent } from "ap-angular2-fullcalendar";


// import * as $ from 'jquery';
// import 'fullcalendar';
// import { Options } from "fullcalendar";


// import {} from 'fullcalendar'
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

  @ViewChild("myCalendar") myCalendar: CalendarComponent;
  // @Input('defaultView') defaultView: string;
  @Input('googleData') googleData;
  calendarInitilized: boolean = false;

  private calendarOptions: Object;
  constructor() {

  }


  initilizeCalenar(settings) {
    console.log(settings)
    settings.defaultView = settings.defaultView || 'month';
    // console.log(googleData);
    this.calendarOptions = {
      //height: 'parent',
      defaultView: settings.defaultView,
      // 	googleCalendarApiKey: 'AIzaSyCIwgW_o0spPcW92j7zM2tBo20cSlaHe5k',
      // 	events: {
      // 	    googleCalendarId: 'ashland.edu_qr6j6r8ktce3ca9gs2io8qqkd4@group.calendar.google.com'
      // 	},
      // fixedWeekCount: false,
      defaultDate: '2016-09-12',
      // editable: true,
      // eventLimit: 5,
      // eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2016-09-01'
        },
        {
          title: 'Long Event',
          start: '2016-09-07',
          end: '2016-09-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2016-09-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2016-09-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2016-09-11',
          end: '2016-09-13'
        },
        {
          title: 'Meeting',
          start: '2016-09-12T10:30:00',
          end: '2016-09-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2016-09-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2016-09-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2016-09-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2016-09-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2016-09-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2016-09-28'
        }
      ]
    };

    // $('#Calendar').fullCalendar(this.calendarOptions)
    // $('#calendar').fullCalendar({
    //   height: "auto",
    //   // contentHeight: 299,
    //   // aspectRatio : 2,
    //   defaultView: settings.defaultView,
    //   defaultDate: '2017-04-12',
    //   editable: true,
    //   eventLimit: true, // allow "more" link when too many events
    //   googleCalendarApiKey: 'AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE',

    //   // US Holidays
    //   events: 'en.usa#holiday@group.v.calendar.google.com',

    // });
    console.log("inits")
    this.calendarInitilized = true;
  }


  changeView(newView: calendarViews) {
    console.log(calendarViews[newView])
    this.myCalendar.fullCalendar('changeView', calendarViews[newView])
  }

  change() {
    console.log("hi")
    this.myCalendar.fullCalendar('changeView', "listDay");

  }

  onCalendarInit(e) {
    console.log(e, "inti");
  }


  createCalendarSettings() {

    this.googleData.defaultView = this.googleData.defaultView || 'month';
    console.log(this.googleData);
    this.calendarOptions = {
      // height: 100,0
      contentHeight: 200,
      // contentHeight: 200,
      //  aspectRatio: 3,
      defaultView: this.googleData.defaultView,
      // 	googleCalendarApiKey: 'AIzaSyCIwgW_o0spPcW92j7zM2tBo20cSlaHe5k',
      // 	events: {
      // 	    googleCalendarId: 'ashland.edu_qr6j6r8ktce3ca9gs2io8qqkd4@group.calendar.google.com'
      // 	},
      // fixedWeekCount: false,
      defaultDate: '2016-09-12',
      // editable: true,
      // eventLimit: 5,
      // eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2016-09-01'
        },
        {
          title: 'Long Event',
          start: '2016-09-07',
          end: '2016-09-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2016-09-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2016-09-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2016-09-11',
          end: '2016-09-13'
        },
        {
          title: 'Meeting',
          start: '2016-09-12T10:30:00',
          end: '2016-09-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2016-09-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2016-09-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2016-09-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2016-09-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2016-09-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2016-09-28'
        }
      ]
    };

  }

}
