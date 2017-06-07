import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
declare var gapi: any;
/*
  Generated class for the GoogleAuthenticationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GoogleAuthenticationProvider {

  public clientId = '579980970072-jhe0n3a5lgsocuv8qv76i9gjtqbg1p25.apps.googleusercontent.com';
  public apiKey = 'AIzaSyC_AVRBRTKnnd2C8ZBQxwv708KiCFnYti0';
  public scopes = ['https://www.googleapis.com/auth/plus.me', 'https://www.googleapis.com/auth/calendar.readonly'];
  public logoutUrl = 'https://accounts.google.com/o/oauth2/revoke?token=';
	/* 
	 * global application state, so it's OK to keep it as field value of a singleton. alternative would be a 
	 * buitl-in global value store.
	 */
  public isAuthenticated: boolean = false;
  public userName: string;
  public userImageUrl: string;

  constructor() {
    // check the authentication silently
    //this.internalAuthenticate(true);
  }

  login(callback) {
    console.log('proceed login');
    // check the authentication and present a dialog on failure
    this.internalAuthenticate(false,callback);
  }

  logout() {
    console.log('proceed logout');
    // reset the gloab application state
    this.isAuthenticated = false;
    this.setUserData('', '');
		/* revoke existing token - there is no Google API support for that, window.fetch() is
		 * a replacement for the JS XHTTP Request, is not available in older browsers though.
		 */
    window.fetch(this.logoutUrl + gapi.auth.getToken().access_token);
  }

  private internalAuthenticate(immediate: boolean, callback) {
		/* heavily use promises here for 2 reasons:
		 *
		 * nr1: readability (image callback syntax here :( )
		 * nr2: ui synchronisation: due to the GAPI, the result is handled in a callback, 
		 *		angular does therefor not know of any scope changes. since ther is no scope
		 *		as in angular1 one cannot manually trigger the scope digest.
		 *		Using Promises solves this problem since the scope digest is triggered on 
		 *		resove() and reject().
		 * The callbacks passed to then() are lambdas to ensure the call applies to the correct
		 * scope.
		 */
    return this.proceedAuthentication(immediate)
      //].then(() => this.initializeGooglePlusAPI())
      .then(() => this.initializeGoogleCalendarAPI())
      //.then(() => this.loadGooglePlusUserData())
      //.then((response: any) => this.setUserData(response.result.displayName, response.result.image.url))
      .then(callback)
      .catch((error: any) => { console.log('authentication failed: ' + error) });
  }

  private proceedAuthentication(immediate: boolean) {
    return new Promise((resolve, reject) => {
      console.log('proceed authentication - immediate: ' + immediate);
      gapi.client.setApiKey(this.apiKey);
      var authorisationRequestData =
        {
          'client_id': this.clientId,
          'scope': this.scopes,
          'immediate': immediate
        }
      gapi.auth.authorize(authorisationRequestData,
        (authenticationResult) => {
          console.log(authenticationResult)
          if (authenticationResult && !authenticationResult.error) {
            this.isAuthenticated = true
            this.setUserData('unknown', '');
            resolve()
          }
          else {

            this.isAuthenticated = false
            this.setUserData('', '');
            reject();
          }
        }
      );
    });
  }

  private initializeGooglePlusAPI() {
    return new Promise((resolve, reject) => {
      console.log('initialize Google Plus API');
      resolve(gapi.client.load('plus', 'v1'));
    });
  }

  private initializeGoogleCalendarAPI() {
    return new Promise((resolve, reject) => {
      console.log('initialize Google Calendar API');
      resolve(gapi.client.load('calendar', 'v3'));
    });
  }

  private loadGooglePlusUserData() {
    return new Promise((resolve, reject) => {
      console.log('load Google Plus data');
      resolve(gapi.client.plus.people.get({ 'userId': 'me' }));
    });
  }

  private setUserData(userName: string, userImageUrl: string) {
    this.userName = userName;
    this.userImageUrl = userImageUrl;
    console.log('user: ' + this.userName + ', image: ' + this.userImageUrl);
  }

}
