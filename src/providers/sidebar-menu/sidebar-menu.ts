import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



export interface MenuItem {
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

  constructor(public http: Http) {

    this.categories = [
      {
        name: "Home",
        page: "Home",
        id: 1,
        items: []// Required: array, even empty
      },
      {
        name: "Calendars",
        // id: ,
        items: [// Required: array, even empty
          {
            name: "Main",
            page: "MainCalendar",
            id: 2,
            items: []// Required: array, even empty
          },
          {
            name: "Bluegrass",
            page: "BluegrassCalendar",
            id: 3,
            items: []// Required: array, even empty
          },
        ]
      },
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

    ];

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

}
