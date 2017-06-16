
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';

import { FullCalendar } from "../../providers/full-calendar";
import { CalendarTemplate, calendarViews } from '../../components/calendar-template/calendar-template'
import { Observable } from 'rxjs';

declare var gapi;


// import { ImageSliderProvider } from "../../providers/image-slider/image-slider";
import { HomeSliderProvider, Image } from "../../providers/home-slider/home-slider"


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
    public homeSlider: HomeSliderProvider) {


  }

  ionViewDidLoad() {


    this.sliderObservable = this.homeSlider.getImages().subscribe(data => {
      this.slides = data;
      this.imgSlider.update();
      setTimeout(() => {
        this.imgSlider.autoplay = 2000;
        this.imgSlider.loop = true;
        this.imgSlider.mode = 'md'
        this.imgSlider.speed = 2000;
        this.imgSlider.autoplayDisableOnInteraction = false;
        //  speed='2000' autoplayDisableOnInteraction=false
        this.imgSlider.startAutoplay();
      }, 500); // need to wait at least 300ms for sliders.update
    });


    this.calendar.initilizeCalendar(this.fullCalendar.getListSettings(['ashland.edu_qr6j6r8ktce3ca9gs2io8qqkd4@group.calendar.google.com']));
  }

  ionViewDidLeave() {
    this.sliderObservable.unsubscribe();
  }

}
