import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Services page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

interface baseService {
  title: string;
  time: string;
  description: string;
}

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class Services {

  services: Array<baseService>;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    this.createServices();

  }

  createServices() {
    this.services = new Array<baseService>();
    this.services.push({
      title: "Service",
      time: "Sunday | 11:00 AM - 12:15 PM",
      description: `
      Our is at 11:00.
      Our talented praise team features electric and acoustic guitars, drums, bass, and keyboard. 
      This service opens with an extended period of worship before transitioning to the proclamation of the Word of God. " 
      `
    });
    this.services.push({
      title: "Sunday School",
      time: "10:00 AM - 11:00 AM",
      description: `
      Sunday class available for all ages. 
      Nursery for 0 to 5, elementary for 1st to 6th, youth for 7th to 12th. 
      There is also adult class, couples class, and women’s Bible study. 
      `
    });
    this.services.push({
      title: "Children Church",
      time: "Sunday | 11:00 AM - 12:15 PM",
      description: `
      Children's Church is offered during the 
      11:00 service for children 3 years through 5th grade. 
      Nursery is also available. "
      `
    });

  }




  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad Services');
  // }

  navigateToFacebook() {
    window.open('https://www.facebook.com/LafayetteUMC.net');
  }

}
