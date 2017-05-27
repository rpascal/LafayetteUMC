import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var google;
import { Email, IMessage } from '../../providers/email';
/**
 * Generated class for the Contact page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class Contact {

  contactForm: FormGroup;
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public emailService: Email) {
    this.contactForm = formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      email: [''],
      subject: [''],
      body: ['']
    });
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    let latLng = new google.maps.LatLng(41.104744, -81.931781);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    var marker = new google.maps.Marker({
      position: latLng,
      title: "Hello World!"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(this.map);



    console.log('done')
  }

  // api_key = 'key-c89fe3083192c25d9ad8e37d72d9a5ed';
  // domain = 'sandboxae083769e751441dae7c2dbb1f9392a4.mailgun.org';
  // mailgun : mailgun = ({ apiKey: this.api_key, domain: this.domain });
  //require('mailgun-js')

  sendEmail() {
    let message: IMessage = {
      email: "ryanpascal99@yahoo.com",
      message: "hi",
      name: "ryan"

    };

    // this.contactForm.n
    this.emailService.sendEmail(message)
    .subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    })
  }

}
