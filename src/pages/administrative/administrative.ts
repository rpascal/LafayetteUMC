import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
import {
  LoadingController,
  Loading,
  AlertController
} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';

@IonicPage({
  name: 'Administrative',
  segment: 'Administrative'
})
@Component({
  selector: 'page-administrative',
  templateUrl: 'administrative.html',
})
export class AdministrativePage {

  public isLoggedIn;

  loginForm: FormGroup;
  loading: Loading;


  constructor(public navCtrl: NavController,
    public navParams: NavParams, public afAuth: AngularFireAuth,
    public formBuilder: FormBuilder, public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {

    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required,
      EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6),
      Validators.required])]
    });

  }

  ionViewDidLoad() {

    const authObserver = this.afAuth.authState.subscribe(user => {
      console.log(user)
      if (user) {
        this.isLoggedIn = true;
        // this.rootPage = HomePage;
        authObserver.unsubscribe();
      } else {
        this.isLoggedIn = false;
        // this.rootPage = 'LoginPage';
        authObserver.unsubscribe();
      }
    });

  }

  loginUser() {
    if (!this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      this.afAuth.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
        .then(authData => {
          this.loading.dismiss();
          this.isLoggedIn = true;
        }, error => {
          this.loading.dismiss().then(() => {
            let alert = this.alertCtrl.create({
              message: error.message,
              buttons: [
                {
                  text: "Ok",
                  role: 'cancel'
                }
              ]
            });
            alert.present();
          });
        });

      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
    }
  }

  logout() {
    this.afAuth.auth.signOut().then(data => {
      this.isLoggedIn = false;

    });
  }

}
