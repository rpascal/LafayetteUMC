import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';


// import * as $ from 'jquery';
declare var fullCalendar;
declare var $: any

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
  templateUrl: 'calendar-template.html',
})
export class CalendarTemplate {

  calendarInitilized: boolean = false;

  constructor() {
  }


  initilizeCalendar(settings) {
    $(".calendar").empty();
    $('.calendar').fullCalendar(settings);
    this.calendarInitilized = true;


  }



}





