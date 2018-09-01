import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HeadingBarModule } from '../../components/heading-bar/heading-bar.module';
import { EventsPage } from './events';

@NgModule({
  declarations: [
    EventsPage,
  ],
  imports: [
    HeadingBarModule,
    IonicPageModule.forChild(EventsPage),
  ],
  exports: [
    EventsPage
  ]
})
export class EventsPageModule {}
