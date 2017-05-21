import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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


  public getBasicCalendarData(defaultView){
    return {
      apiKey : "AIzaSyCIwgW_o0spPcW92j7zM2tBo20cSlaHe5k",
      googleCalendarID : "ashland.edu_qr6j6r8ktce3ca9gs2io8qqkd4@group.calendar.google.com",
      defaultView : defaultView
    };
  }


}
