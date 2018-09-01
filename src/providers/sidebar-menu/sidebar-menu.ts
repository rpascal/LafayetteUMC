import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


export interface MenuItem {
  $key?: string,
  name: string;
  id?: number;
  icon?: string;
  page?: string;
  url?: string;
  items: Array<MenuItem>;
}

@Injectable()
export class SidebarMenuProvider {

  private categories: Array<MenuItem>;

  constructor(public http: Http, public fb: AngularFireDatabase) {

    this.categories = [
      {
        name: "Home",
        page: "Home",
        id: 1,
        items: []// Required: array, even empty
      },
      {
        name: "Events",
        page: "EventsPage",
        id: 11,
        items: []// Required: array, even empty
      },
      {
        name: "Calendar",
        page: "MainCalendar",
        id: 2,
        items: []// Required: array, even empty
      },
      // {
      //   name: "Calendars",
      //   // id: ,
      //   items: [// Required: array, even empty
      //     {
      //       name: "Main",
      //       page: "MainCalendar",
      //       id: 2,
      //       items: []// Required: array, even empty
      //     },
      //     {
      //       name: "Bluegrass",
      //       page: "BluegrassCalendar",
      //       id: 3,
      //       items: []// Required: array, even empty
      //     },
      //   ]
      // },
      {
        name: "Services",
        id: 4,
        page: "Services",
        items: []// Required: array, even empty
      },
      {
        name: "Youth",
        id: 5,
        page: "Youth",
        items: []// Required: array, even empty
      },
      {
        name: "Bluegrass",
        id: 6,
        page: "Bluegrass",
        items: []// Required: array, even empty
      },
      {
        name: "History",
        id: 7,
        page: "History",
        items: []// Required: array, even empty
      },
      {
        name: "Reach Us",
        id: 8,
        page: "Contact",
        items: []// Required: array, even empty
      },
      // {
      //   name: "VBS",
      //   id: 9,
      //   //page: "Contact",
      //   url : 'https://www.google.com/',
      //   items: []// Required: array, even empty
      // },
      {
        name: "Administrative",
        id: 10,
        page: "Administrative",
        items: []// Required: array, even empty
      }

    ];

  }


  getExtraLinks(): Observable<MenuItem[]> {
    // let storage = this.firebase.storage();
    return this.fb.list('sideMenuExtras').snapshotChanges().map(itemList =>
      itemList.map((item) => {

        try {
          // var pathReference = storage.ref(item.path);
          let result: MenuItem =
            {
              $key: item.key,
              id: item.payload.val().id,
              name: item.payload.val().name,
              url: item.payload.val().url,
              items: []
            };
          return result;
        } catch (err) {

        }
      })
    );

  }

  // Should be an API call
  getAll() {
    return this.categories;
  }





  getCategoryById(id: number) {
    let filtered = this.categories.filter((item) => {
      return item.id == id
    });
    return filtered.length > 0 ? filtered[0] : null;
  }

  deleteExtra(item: MenuItem) {
    this.fb.object('sideMenuExtras/' + item.$key).remove()
  }

  addExtra(name: string, url: string) {
    this.fb.list('sideMenuExtras/').push({ id: -1, name: name, url: url })
  }






}
