import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
declare var gapi: any;
/*
  Generated class for the GoogleCalendarProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GoogleCalendarProvider {

  constructor(public http: Http) {
    console.log('Hello GoogleCalendarProvider Provider');
  }


  private clientID = '134927707439-ssqngr2rhas01f6ho0acf6rvc30necpf.apps.googleusercontent.com'
  private userEmail = "ashland.edu_qr6j6r8ktce3ca9gs2io8qqkd4@group.calendar.google.com"; //your calendar Id  
  private userTimeZone = "Ohio";
  private scope = "https://www.googleapis.com/auth/calendar.readonly";





  getEvents(eventsCallback) {
    console.log("auth check")

    gapi.client.init({
      'apiKey': 'AIzaSyCIwgW_o0spPcW92j7zM2tBo20cSlaHe5k',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
    }).then(function () {

      console.log("initsss")
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
            'calendarId': "ashland.edu_qr6j6r8ktce3ca9gs2io8qqkd4@group.calendar.google.com",
            //'timeZone': "Ohio",
            'singleEvents': true,
            'timeMin': today.toISOString(), //gathers only events not happened yet
            'maxResults': 100,
            'orderBy': 'startTime'
          });

          request.execute(function (resp) {

            if (resp.error) {
              resolve("Error Loading Data");
              // console.log('request.execute error:');
              // console.log(resp.error);
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

    // gapi.auth.authorize({ client_id: this.clientID, scope: this.scope, immediate: false }, this.handleAuthResult(this).then(eventsCallback));
    return false;
  }

  handleAuthResult(authResult) {

    return new Promise((resolve, reject) => {

      console.log("Authentication result:");
      console.log(authResult);

      if (authResult && !authResult.error) {

        gapi.client.load('calendar', 'v3', function () {

          var today = new Date();
          var request = gapi.client.calendar.events.list({
            'calendarId': this.userEmail,
            'timeZone': this.userTimeZone,
            'singleEvents': true,
            'timeMin': today.toISOString(), //gathers only events not happened yet
            'maxResults': 25,
            'orderBy': 'startTime'
          });

          request.execute(function (resp) {

            if (resp.error) {
              console.log('request.execute error:');
              console.log(resp.error);
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

            //  console.log(ret)
            resolve(ret);
            // for (var i = 0; i < resp.items.length; i++) {
            //   console.log((resp.items[i]));

            // }
          }.bind(this));
        }.bind(this));
      } else {
        console.log("NOT  authenticated  " + authResult.error);
        console.log(authResult);
      }

    });


  }





}
