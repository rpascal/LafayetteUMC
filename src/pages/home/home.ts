
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';

import { FullCalendar } from "../../providers/full-calendar";
import { CalendarTemplate, calendarViews } from '../../components/calendar-template/calendar-template'


declare var gapi;


import { ImageSliderProvider } from "../../providers/image-slider/image-slider";



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

  public imageSlider: {
    settings: any,
    urls: string[]
  }

  images: any[] = [
    // { path: "../assets/images/1.jpg" },
    // { path: "../assets/images/2.jpg" },
    // { path: "../assets/images/3.jpg" },
    // { path: "../assets/images/4.jpg" },
    // { path: "../assets/images/5.jpg" },
    // { path: "../assets/images/6.jpeg" },
    // { path: "../assets/images/7.jpg" },
    // { path: "../assets/images/8.jpeg" },
  ];


  constructor(public navCtrl: NavController,
    public fullCalendar: FullCalendar,
    public is: ImageSliderProvider) {
    is.getImage().then(data => {
      console.log(data)
      this.images = data;

      this.imageSlider = {
        settings: {
          pager: true,
          autoplay: 500,
          loop: true,
          speed: 2000,
          autoplayDisableOnInteraction: false
        },
        urls: data
      }


      // this.imgSlider.speed = 200;

      // this.imgSlider.set


      // this.imgSlider.startAutoplay();

    })
    //  is.getImage(data=>{
    //    this.images.push(data);
    //   console.log(data)
    // })

  }

  ionViewDidLoad() {
    // this.imgSlider.centeredSlides = true;
    // this.imgSlider.spaceBetween = 5;

    this.calendar.initilizeCalendar(this.fullCalendar.getListSettings(['ashland.edu_qr6j6r8ktce3ca9gs2io8qqkd4@group.calendar.google.com']));

  }











}
