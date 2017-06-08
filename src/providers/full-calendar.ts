import { Injectable } from '@angular/core';



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


  public getListSettings(calendarIDs: string[]) {
    return {
      defaultView: 'listWeek',
      googleCalendarApiKey: 'AIzaSyCIwgW_o0spPcW92j7zM2tBo20cSlaHe5k',
      firstDay: (new Date().getDay()),
      eventSources: this.getEventSources(calendarIDs),
      eventClick: function (event) {
        window.open(event.url, 'gcalevent');
        return false;
      }
    };
  }

  private getEventSources(calendarIDs: string[]) {

    let events = []
    calendarIDs.forEach(item => {
      events.push({
        googleCalendarId: item,
      })
    })
    return events;


  }


}
