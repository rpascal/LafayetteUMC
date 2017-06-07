
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';

import { FullCalendar } from "../../providers/full-calendar";
import { CalendarTemplate, calendarViews } from '../../components/calendar-template/calendar-template'

import { GoogleCalendarProvider } from "../../providers/google-calendar/google-calendar";
declare var gapi;
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
  @ViewChild("calendar") calendar: CalendarTemplate;
  private googleCalendarData: Object;

  images: any[] = [
    { path: "../assets/images/1.jpg" },
    { path: "../assets/images/2.jpg" },
    { path: "../assets/images/3.jpg" },
    { path: "../assets/images/4.jpg" },
    { path: "../assets/images/5.jpg" },
    { path: "../assets/images/6.jpeg" },
    { path: "../assets/images/7.jpg" },
    { path: "../assets/images/8.jpeg" },];


  constructor(public navCtrl: NavController,
    public fullCalendar: FullCalendar,
    public GoogleCalendarProvider: GoogleCalendarProvider) {
  }

  ngAfterViewInit() {
    // this.imgSlider.centeredSlides = true;
    // this.imgSlider.spaceBetween = 5;
    this.imgSlider.pager = true;
    this.imgSlider.autoplay = 500;
    this.imgSlider.loop = true;
    this.imgSlider.speed = 2000;
    this.imgSlider.autoplayDisableOnInteraction = false;

    //this.fullCalendar.listEvents()

    // this.GoogleAuthenticationProvider.login((response: any) => {
    //   console.log("logged in")
    //   // this.GoogleCalendarProvider.loadAppointments().then(data =>{
    //   //   console.log("data" , data)
    //   // })
    //   this.GoogleCalendarProvider.listUpcomingEvents()

    // })

    // this.GoogleCalendarProvider.getEvents((res)=>{
    //   console.log(res)
    // });

    setTimeout(() => {
      this.googleCalendarData = this.fullCalendar.getBasicCalendarData(calendarViews[calendarViews.listWeek]);
      this.calendar.initilizeCalenar(this.googleCalendarData);
    }, 1000)

    // setTimeout(() => {
    //   this.calendar.changeView(calendarViews.agendaWeek);
    // }, 3000)

    console.log(this.googleCalendarData)
  }











}
