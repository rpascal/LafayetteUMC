import { Injectable } from '@angular/core';



@Injectable()
export class FullCalendar {

  constructor() {
    console.log('Hello FullCalendar Provider');
  }


  public getBasicCalendarData(defaultView) {
    return {
      apiKey: "AIzaSyCIwgW_o0spPcW92j7zM2tBo20cSlaHe5k",
      googleCalendarID: "lafayetteumcmailing@gmail.com",
      defaultView: defaultView
    };
  }

  public getMonthSettings(calendarIDs: string[]) {
    return {
      // defaultView: 'month',
      // customButtons: {
      //   myCustomButton: {
      //     text: 'custom!',
      //     click: function () {
      //       alert('clicked the custom button!');
      //     }
      //   }
      // },
      //myCustomButton
      buttonIcons: {
        prev: 'left-single-arrow',
        next: 'right-single-arrow',
        prevYear: 'left-double-arrow',
        nextYear: 'right-double-arrow'
      },
      header: {
        left: 'month,basicWeek,listWeek',
        center: 'title',
        right: 'today prev,next'
      },
      googleCalendarApiKey: 'AIzaSyCIwgW_o0spPcW92j7zM2tBo20cSlaHe5k',
      // firstDay: (new Date().getDay()),
      eventSources: this.getEventSources(calendarIDs),
      eventClick: function (event) {
        window.open(event.url, 'gcalevent');
        return false;
      },
      eventDestroy: function (event, element, view) {
        //console.log('destroy event')
      },

      eventRender: function (event, element, view) {
        // console.log('render')
      },
      eventAfterRender: function (event, element, view) {
        //  console.log('after render')
      },
      eventAfterAllRender: function (event, element, view) {
        //  console.log('all render')
      },


    };

  }


  public getListSettings(calendarIDs: string[]) {
    return {
      defaultView: 'listWeek',
      googleCalendarApiKey: 'AIzaSyCIwgW_o0spPcW92j7zM2tBo20cSlaHe5k',
      firstDay: (new Date().getDay()),
      eventSources: this.getEventSources(calendarIDs),
      displayEventTime: false,
      eventClick: function (event) {
        window.open(event.url, 'gcalevent');
        return false;
      },
      // eventRender: function (event, element) {
      //  console.log(element, event)
      // }
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
