import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { History } from './history';
import { HeadingBarModule } from '../../components/heading-bar/heading-bar.module'



@NgModule({
  declarations: [
    History,
  ],
  imports: [
    HeadingBarModule,
    IonicPageModule.forChild(History),
  ],
  exports: [
    History
  ]
})
export class HistoryModule {}
