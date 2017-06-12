
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';

import { FullCalendar } from "../../providers/full-calendar";
import { CalendarTemplate, calendarViews } from '../../components/calendar-template/calendar-template'

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


  images: any[] = [
    { path: "../assets/images/1.jpg" },
    // { path: "../assets/images/2.jpg" },
    // { path: "../assets/images/3.jpg" },
    // { path: "../assets/images/4.jpg" },
    // { path: "../assets/images/5.jpg" },
    // { path: "../assets/images/6.jpeg" },
    { path: "../assets/images/7.jpg" },
    // { path: "../assets/images/8.jpeg" },
    ];


  constructor(public navCtrl: NavController,
    public fullCalendar: FullCalendar) {
  }

  ionViewDidLoad() {
    // this.imgSlider.centeredSlides = true;
    // this.imgSlider.spaceBetween = 5;
    this.imgSlider.pager = true;
    this.imgSlider.autoplay = 500;
    this.imgSlider.loop = true;
    this.imgSlider.speed = 2000;
    this.imgSlider.autoplayDisableOnInteraction = false;


    this.calendar.initilizeCalendar(this.fullCalendar.getListSettings(['ashland.edu_qr6j6r8ktce3ca9gs2io8qqkd4@group.calendar.google.com']));

  }











}
