
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';

import { FullCalendar } from "../../providers/full-calendar";
import { CalendarTemplate, calendarViews } from '../../components/calendar-template/calendar-template'
import { Observable } from 'rxjs';

declare var gapi;
declare var Swiper;

// import { ImageSliderProvider } from "../../providers/image-slider/image-slider";
import { HomeSliderProvider, Image } from "../../providers/home-slider/home-slider"
import { FacebookService, InitParams } from 'ngx-facebook';

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

  slides: Image[];
  private sliderObservable;

  constructor(public navCtrl: NavController,
    public fullCalendar: FullCalendar,
    public homeSlider: HomeSliderProvider,
    private fb: FacebookService) {

    let initParams: InitParams = {
      appId: '147008445987572',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);

  }



  ionViewDidLoad() {





    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      paginationClickable: true,
      spaceBetween: 30,
      centeredSlides: true,
      speed: 1000,
      autoplay: 2500,
      autoplayDisableOnInteraction: false,
      loop: true,
      loopAdditionalSlides: 2,
      observer: true
    });

    console.log(swiper);


    this.sliderObservable = this.homeSlider.getImages().subscribe(data => {
      this.slides = data;
      // this.imgSlider.autoplay = 2000;
      // this.imgSlider.loop = true;
      // // this.imgSlider.mode = 'md'
      // this.imgSlider.speed = 2000;
      // this.imgSlider.autoplayDisableOnInteraction = false;

      // this.imgSlider.update();

      // setTimeout(() => {

      //   //  speed='2000' autoplayDisableOnInteraction=false
      //   this.imgSlider.startAutoplay();
      // }, 500); // need to wait at least 300ms for sliders.update
    });


    this.calendar.initilizeCalendar(this.fullCalendar.getListSettings(['ashland.edu_qr6j6r8ktce3ca9gs2io8qqkd4@group.calendar.google.com']));
  }

  ionViewDidLeave() {
    this.sliderObservable.unsubscribe();
  }

}
