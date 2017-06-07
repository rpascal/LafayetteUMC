import { Component, Input, ViewChild } from '@angular/core';
import { CalendarComponent } from "ap-angular2-fullcalendar";
import { Http, HttpModule, Response } from '@angular/http';

// import 'rxjs/Rx';

import * as $ from 'jquery';
declare var fullCalendar;


// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';

import { GoogleCalendarProvider } from "../../providers/google-calendar/google-calendar";

// import * as f from 'fullcalendar'

// import 'fullcalendar';
// import ''
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


  // getCalendarFeed(): Observable<any> {
  //   let PUBLIC_KEY = 'AIzaSyCIwgW_o0spPcW92j7zM2tBo20cSlaHe5k',
  //     CALENDAR_ID = 'ashland.edu_qr6j6r8ktce3ca9gs2io8qqkd4@group.calendar.google.com';
  //   let dataUrl = ['https://www.googleapis.com/calendar/v3/calendars/',
  //     CALENDAR_ID, '/events?key=', PUBLIC_KEY].join('');
  //   return this.http.get(dataUrl)
  //     .map(this.extractData);
  //   //.catch(this.handleError);
  // }
  // private extractData(res: Response) {
  //   let body = res.json().items;
  //   var ret: Array<any> = new Array<any>();
  //   body.forEach(item => {
  //     if (item.summary == "Sunday School")
  //       console.log(item)
  //     if (item.status != "cancelled")
  //       ret.push(
  //         {
  //           // id : item.id,
  //           // title : "",
  //           id: item.id,
  //           title: item.summary,
  //           start: item.start.dateTime || item.start.date, // try timed. will fall back to all-day
  //           end: item.end.dateTime || item.end.date, // same
  //           url: item.htmlLink,
  //           location: item.location,
  //           description: item.description

  //         }

  //       );
  //   });


  //   return ret || {};
  // }

  // createInstance(item) {
  //   return {
  //     // id : item.id,
  //     // title : "",
  //     id: item.id,
  //     title: item.summary,
  //     start: item.start.dateTime || item.start.date, // try timed. will fall back to all-day
  //     end: item.end.dateTime || item.end.date, // same
  //     url: item.htmlLink,
  //     location: item.location,
  //     description: item.description

  //   };
  // }

  // private getData() {
  //   let PUBLIC_KEY = 'AIzaSyCIwgW_o0spPcW92j7zM2tBo20cSlaHe5k',
  //     CALENDAR_ID = 'ashland.edu_qr6j6r8ktce3ca9gs2io8qqkd4@group.calendar.google.com';
  //   let dataUrl = ['https://www.googleapis.com/calendar/v3/calendars/',
  //     CALENDAR_ID, '/events?key=', PUBLIC_KEY].join('');

  //   return this.http.get(dataUrl).toPromise().then(this.extractData);
  // }
  // private extractData(res: Response) {
  //   let t = {
  //     //height: 'parent',
  //     // defaultView: settings.defaultView,
  //     // 	googleCalendarApiKey: 'AIzaSyCIwgW_o0spPcW92j7zM2tBo20cSlaHe5k',
  //     // 	events: {
  //     // 	    googleCalendarId: 'ashland.edu_qr6j6r8ktce3ca9gs2io8qqkd4@group.calendar.google.com'
  //     // 	},
  //     // fixedWeekCount: false,
  //     // defaultDate: '2016-09-12',
  //     // editable: true,
  //     // eventLimit: 5,
  //     // eventLimit: true, // allow "more" link when too many events
  //     events: res.json().items
  //   };
  //   console.log(t)
  //   $('#calendar').fullCalendar(t);
  //   console.log(res.json());
  //   return res.json();
  // }


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
