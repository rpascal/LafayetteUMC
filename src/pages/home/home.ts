
import { IonicPage, NavController, Slides } from 'ionic-angular';
import { Component, ViewChild, HostListener, HostBinding, ElementRef } from '@angular/core';

import { FullCalendar } from "../../providers/full-calendar";
import { CalendarTemplate, calendarViews } from '../../components/calendar-template/calendar-template'

declare var Swiper;

import { HomeSliderProvider, Image } from "../../providers/home-slider/home-slider"
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



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
  @ViewChild('facebookContainer') facebookContainer: ElementRef;

  slides: Image[];
  private sliderObservable;


  facebookWidth: number = 400;
  facebookHeight: number = 500;
  facebookSrc: SafeResourceUrl;


  @HostListener('window:resize', ['$event.target'])
  onResize() {
    this.refreshFacebook();
  }


  constructor(public navCtrl: NavController,
    public fullCalendar: FullCalendar,
    public homeSlider: HomeSliderProvider,
    public sanitizer: DomSanitizer) {

  }

  ngAfterViewInit() {
    this.refreshFacebook();
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


  refreshFacebook() {
    var containerWidth = +this.facebookContainer.nativeElement.clientWidth - 30;//this.facebookContainer.clientWidth;
    if (containerWidth > 500)
      containerWidth = 500;
    var containerHeight = 500;
    var src =
      "https://www.facebook.com/plugins/page.php" +
      "?href=https://www.facebook.com/LafayetteUMC.net/" +
      "&tabs=timeline,events" +
      "&width=" +
      containerWidth +
      "&height=" +
      containerHeight +
      "&147008445987572";

    this.facebookWidth = containerWidth;
    this.facebookHeight = containerHeight;

    this.facebookSrc = this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }

}
