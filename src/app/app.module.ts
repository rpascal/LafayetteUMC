import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MultilevelMenuComponent } from '../components/multilevel-menu/multilevel-menu';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarMenuProvider } from '../providers/sidebar-menu/sidebar-menu';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// import { ImageSliderProvider } from '../providers/image-slider/image-slider';
// import { HomeSliderProvider } from '../providers/home-slider/home-slider';
// import { ManageHomeSliderComponent } from '../components/manage-home-slider/manage-home-slider';
// import { UploadComponent } from '../components/upload/upload';

@NgModule({
  declarations: [
    MyApp,
    MultilevelMenuComponent,
    // ManageHomeSliderComponent,
    // UploadComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SidebarMenuProvider,
    // ImageSliderProvider,
    // HomeSliderProvider,
  ]
})
export class AppModule { }
