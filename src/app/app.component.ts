import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuService } from '../components/multilevel-menu/menu';



@Component({
  templateUrl: 'app.html',
    providers: [MenuService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "Home";

  pages: Array<{ title: string, component?: string, subPages?: Array<any> }>;

  categories: any;
  selectedCategory: any;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public MenuService: MenuService) {
    this.initializeApp();

    this.categories = MenuService.getAll();
    this.selectedCategory = MenuService.getCategoryById(1);


    this.pages = [
      { title: 'Home', component: "Home" },
      {
        title: 'Calendar', subPages: [
          { title: 'Main', component: "MainCalendar" },
          { title: 'Bluegrass', component: "BluegrassCalendar" }
        ]
      },
      { title: 'Services', component: "Services" },
      { title: 'Youth', component: "Youth" },
      { title: 'Bluegrass', component: "Bluegrass" },
      { title: 'History', component: "History" },
      { title: 'Reach Us', component: "Contact" },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  navigateToFacebook() {
    window.open('http://apache.org', '_blank', 'location=yes');
  }

  onMenuSelect(cat) {
    console.info('In app.components: selected category', cat);
    this.selectedCategory = cat;
    this.nav.setRoot(cat.page, {
      selectedCategory: cat
    })
  }

}
