import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SidebarMenuProvider } from '../providers/sidebar-menu/sidebar-menu';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "Home";

  categories: any;
  selectedCategory: any;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public sideBarMenu: SidebarMenuProvider) {
    this.initializeApp();

    this.categories = sideBarMenu.getAll();
    sideBarMenu.getExtraLinks().subscribe(data => {
      data.forEach(element => {
        if (!this.categories.find(x => x.$key === element.$key))
          this.categories.push(element)
      });
    });


    //this.selectedCategory = sideBarMenu.getCategoryById(1);



  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      console.log(this.nav.getActiveChildNav())
    });
  }


  onMenuSelect(cat) {
    console.info('In app.components: selected category', cat);

    if (cat.url) {
      window.open(cat.url);
    } else {
      //this.selectedCategory = cat;
      this.nav.setRoot(cat.page, {
        selectedCategory: cat
      })
    }
  }

}
