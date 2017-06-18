
import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Http, Request, RequestMethod,Headers} from "@angular/http";

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

   http: Http;
    mailgunUrl: string;
    mailgunApiKey: string;
 
    constructor(http: Http) {
        this.http = http;
        this.mailgunUrl = "sandboxae083769e751441dae7c2dbb1f9392a4.mailgun.org";
        this.mailgunApiKey = window.btoa("api:key-c89fe3083192c25d9ad8e37d72d9a5ed");
    }
 
    send(recipient: string, subject: string, message: string) {
        var requestHeaders = new Headers();
        requestHeaders.append("Authorization", "Basic " + this.mailgunApiKey);
        requestHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        this.http.request(new Request({
             method: RequestMethod.Post,
             url: "https://api.mailgun.net/v3/" + this.mailgunUrl + "/messages",
             body: "from=test@example.com&to=" + recipient + "&subject=" + subject + "&text=" + message,
             headers: requestHeaders
        }))
        .subscribe(success => {
            console.log("SUCCESS -> " + JSON.stringify(success));
        }, error => {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    }










  // private emailUrl = 'assets/php/email.php';

  // constructor(private http: Http) {

  // }
  // //: Observable<IMessage> |
  // sendEmail(message: IMessage): any {

  //   // return new Promise(resolve => {
  //   //       let headers = new Headers();
  //   //       headers.append('Content-Type', 'application/json');
  //   //       console.log("hi2")
  //   //       // http://lafayetteumc.net/
  //   //       // this.http.get('http://localhost:8080/api/test', JSON.stringify({hu: "hi"}))
  //   //       this.http.get('http://lafayetteumc.net/api/test', JSON.stringify({hu: "hi"}))

  //   //       // .map(res => res.json())
  //   //         .subscribe(data => {
  //   //           console.log(data)
  //   //           resolve(data);
  //   //         },error =>{
  //   //           console.log(error)
  //   //         });
  //   //     });

  //   return this.http.post(this.emailUrl, message)
  //     .map(response => {
  //       console.log('Sending email was successfull', response);
  //       return response;
  //     })
  //     .catch(error => {
  //       console.log('Sending email got error', error);
  //       return Observable.throw(error)
  //     })
  // }

}
