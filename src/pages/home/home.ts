
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { CalendarComponent } from "ap-angular2-fullcalendar";
/**
 * Generated class for the Homes page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

 @ViewChild("imgSlider") imgSlider: Slides;

  images: any[] = [
    { path: "../assets/images/1.jpg" },
    { path: "../assets/images/2.jpg" },
    { path: "../assets/images/3.jpg" },
    { path: "../assets/images/4.jpg" },
    { path: "../assets/images/5.jpg" },
    { path: "../assets/images/6.jpeg" },
    { path: "../assets/images/7.jpg" },
    { path: "../assets/images/8.jpeg" },];


  constructor(public navCtrl: NavController) {
  }

  ngAfterViewInit() {
    this.imgSlider.pager = true;
    this.imgSlider.autoplay = 500;
    this.imgSlider.loop = true;
    this.imgSlider.speed = 2000;
    this.imgSlider.autoplayDisableOnInteraction = false;
  }






  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;

  change() {
    console.log("hi")
    this.myCalendar.fullCalendar('changeView', "listDay");

  }

  logEvent(event) {
    console.log(event)
    this.myCalendar.fullCalendar('changeView', "listDay");
  }

  onCalendarInit(e) {
    console.log(e);

  }

  calendarOptions: Object = {
    //height: 'parent',
    // defaultView: 'month',
			googleCalendarApiKey: 'AIzaSyCIwgW_o0spPcW92j7zM2tBo20cSlaHe5k',
			events: {
			    googleCalendarId: 'ashland.edu_qr6j6r8ktce3ca9gs2io8qqkd4@group.calendar.google.com'
			},
    // fixedWeekCount: false,
    // defaultDate: '2016-09-12',
    // editable: true,
    
    // eventLimit: true, // allow "more" link when too many events
    // events: [
    //   {
    //     title: 'All Day Event',
    //     start: '2016-09-01'
    //   },
    //   {
    //     title: 'Long Event',
    //     start: '2016-09-07',
    //     end: '2016-09-10'
    //   },
    //   {
    //     id: 999,
    //     title: 'Repeating Event',
    //     start: '2016-09-09T16:00:00'
    //   },
    //   {
    //     id: 999,
    //     title: 'Repeating Event',
    //     start: '2016-09-16T16:00:00'
    //   },
    //   {
    //     title: 'Conference',
    //     start: '2016-09-11',
    //     end: '2016-09-13'
    //   },
    //   {
    //     title: 'Meeting',
    //     start: '2016-09-12T10:30:00',
    //     end: '2016-09-12T12:30:00'
    //   },
    //   {
    //     title: 'Lunch',
    //     start: '2016-09-12T12:00:00'
    //   },
    //   {
    //     title: 'Meeting',
    //     start: '2016-09-12T14:30:00'
    //   },
    //   {
    //     title: 'Happy Hour',
    //     start: '2016-09-12T17:30:00'
    //   },
    //   {
    //     title: 'Dinner',
    //     start: '2016-09-12T20:00:00'
    //   },
    //   {
    //     title: 'Birthday Party',
    //     start: '2016-09-13T07:00:00'
    //   },
    //   {
    //     title: 'Click for Google',
    //     url: 'http://google.com/',
    //     start: '2016-09-28'
    //   }
    // ]
  };

}
