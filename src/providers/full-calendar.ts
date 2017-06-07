import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// import * as fs from 'fs-web';
// import * as readline from 'readline';
// import * as google from 'googleapis';
// import * as googleAuth from 'google-auth-library';

// var fs = require('fs');
// var readline = require('readline');
// var google = require('googleapis');
// var googleAuth = require('google-auth-library');



/*
  Generated class for the FullCalendar provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FullCalendar {

  constructor() {
    console.log('Hello FullCalendar Provider');
  }


  public getBasicCalendarData(defaultView) {
    return {
      apiKey: "AIzaSyCIwgW_o0spPcW92j7zM2tBo20cSlaHe5k",
      googleCalendarID: "ashland.edu_qr6j6r8ktce3ca9gs2io8qqkd4@group.calendar.google.com",
      defaultView: defaultView
    };
  }

  // public listEvents() {
  //   var calendar = google.calendar('v3');
  //   calendar.events.list({
  //     apiKey: "AIzaSyCIwgW_o0spPcW92j7zM2tBo20cSlaHe5k",
  //     calendarId: 'ashland.edu_qr6j6r8ktce3ca9gs2io8qqkd4@group.calendar.google.com',
  //     timeMin: (new Date()).toISOString(),
  //     maxResults: 10,
  //     singleEvents: true,
  //     orderBy: 'startTime'
  //   }, function (err, response) {
  //     if (err) {
  //       console.log('The API returned an error: ' + err);
  //       return;
  //     }
  //     var events = response.items;
  //     if (events.length == 0) {
  //       console.log('No upcoming events found.');
  //     } else {
  //       console.log('Upcoming 10 events:');
  //       for (var i = 0; i < events.length; i++) {
  //         var event = events[i];
  //         var start = event.start.dateTime || event.start.date;
  //         console.log('%s - %s', start, event.summary);
  //       }
  //     }
  //   });
  // }


}
