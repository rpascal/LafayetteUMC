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
import { SidebarMenuProvider } from "../../providers/sidebar-menu/sidebar-menu";



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
  extraLinksForm: FormGroup;
  loading: Loading;
  menuItems;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public afAuth: AngularFireAuth,
    public formBuilder: FormBuilder, public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public sideMenu: SidebarMenuProvider) {

    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required,
      EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6),
      Validators.required])]
    });

    this.extraLinksForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      url: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {


    this.menuItems = this.sideMenu.getExtraLinks();

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

  createExtraMenuItem() {

    if (!this.extraLinksForm.valid) {
      console.log(this.extraLinksForm.value);
    } else {
      this.sideMenu.addExtra(this.extraLinksForm.value.name, this.extraLinksForm.value.url);

    }

  }

  removeItem(item){
    this.sideMenu.deleteExtra(item);
  }

}
