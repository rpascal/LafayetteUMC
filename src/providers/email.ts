
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface IMessage {
  name?: string,
  email?: string,
  message?: string
}
/*
  Generated class for the Email provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Email {

  private emailUrl = 'assets/php/email.php';

  constructor(private http: Http) {

  }
  //: Observable<IMessage> |
  sendEmail(message: IMessage): any {

    // return new Promise(resolve => {
    //       let headers = new Headers();
    //       headers.append('Content-Type', 'application/json');
    //       console.log("hi2")
    //       // http://lafayetteumc.net/
    //       // this.http.get('http://localhost:8080/api/test', JSON.stringify({hu: "hi"}))
    //       this.http.get('http://lafayetteumc.net/api/test', JSON.stringify({hu: "hi"}))

    //       // .map(res => res.json())
    //         .subscribe(data => {
    //           console.log(data)
    //           resolve(data);
    //         },error =>{
    //           console.log(error)
    //         });
    //     });

    return this.http.post(this.emailUrl, message)
      .map(response => {
        console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        return Observable.throw(error)
      })
  }

}
