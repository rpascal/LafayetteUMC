import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
declare var gapi: any;

@Injectable()
export class GoogleCalendarProvider {

  constructor(public http: Http) {
    console.log('Hello GoogleCalendarProvider Provider');
  }


  getListCalendar(calendarID) {
    //"ashland.edu_qr6j6r8ktce3ca9gs2io8qqkd4@group.calendar.google.com"
    return new Promise((resolve, reject) => {

      this.getEvents(calendarID, events => {
        let calendarOptions = {
          height: 'auto',
          contentHeight: 'auto',
          defaultView: 'listWeek',
          eventClick: function (event) {
            window.open(event.url, 'gcalevent');
            return false;
          },
          events: events
        };
       // console.log(calendarOptions)
        resolve(calendarOptions);
      });



    });
  }



  getEvents(calendarID, eventsCallback) {
    console.log("auth check")

    gapi.client.init({
      'apiKey': 'AIzaSyCIwgW_o0spPcW92j7zM2tBo20cSlaHe5k',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
    }).then(function () {

      return new Promise((resolve, reject) => {


        gapi.client.load('calendar', 'v3', function () {

          var today = new Date();
          // today.setMonth(today.getMonth() - 5);
          // var request = gapi.client.calendar.events.list({
          //   'calendarId': "ashland.edu_qr6j6r8ktce3ca9gs2io8qqkd4@group.calendar.google.com",
          //   //'timeZone': "Ohio",
          //   'singleEvents': true,
          //   'timeMin': today.toISOString(), //gathers only events not happened yet
          //   'maxResults': 1000,
          //   'orderBy': 'startTime'
          // });
          var request = gapi.client.calendar.events.list({
            'calendarId': calendarID,//"ashland.edu_qr6j6r8ktce3ca9gs2io8qqkd4@group.calendar.google.com",
            //'timeZone': "Ohio",
            'singleEvents': true,
            'timeMin': today.toISOString(), //gathers only events not happened yet
            'maxResults': 100,
            'orderBy': 'startTime'
          });

          request.execute(function (resp) {

            if (resp.error) {
              resolve("Error Loading Data");
            }

            var ret: Array<any> = new Array<any>();
            resp.items.forEach(item => {
              //if (item.status != "cancelled")
              ret.push(
                {
                  id: item.id,
                  title: item.summary,
                  start: item.start.dateTime || item.start.date, // try timed. will fall back to all-day
                  end: item.end.dateTime || item.end.date, // same
                  url: item.htmlLink,
                  location: item.location,
                  description: item.description

                }

              );
            });

            resolve(ret);

          }.bind(this));
        }.bind(this));

      });

    }).then(eventsCallback, function (reason) {
      console.log('Error: ');
    });

    return false;
  }


}
