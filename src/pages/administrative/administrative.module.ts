import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdministrativePage } from './administrative';
import { ManageHomeSliderComponentModule } from '../../components/manage-home-slider/manage-home-slider.module'
import { HomeSliderProvider } from "../../providers/home-slider/home-slider";
import { HeadingBarModule } from '../../components/heading-bar/heading-bar.module'
import { SidebarMenuProvider } from "../../providers/sidebar-menu/sidebar-menu";

@NgModule({
  declarations: [
    AdministrativePage,
  ],
  imports: [
    HeadingBarModule,
    IonicPageModule.forChild(AdministrativePage),
    ManageHomeSliderComponentModule
  ],
  exports: [
    AdministrativePage
  ],
  providers: [HomeSliderProvider,SidebarMenuProvider]
})
export class AdministrativePageModule { }
