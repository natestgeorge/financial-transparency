import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class DatabaseService {
   baseUrl:string;
   hasErr:boolean;

   connect(): any {}; // Observable<string>
   getData(search: Object, old: any): any {};
   getAllData(search: Object, old: boolean): any {};
   getFundCategories(): any {};
   getOldFunds(fundType: string): any {};
   getNewFunds(fundType: string): any {};
   getLocations(old:boolean): any {};

   extract(response: Response): any {};
   extractFunds(response: Response): any {};
   handleError(error: Response): any {};
   reformatDate(date: Date): any {};

   constructor(_http: Http) {
      this.baseUrl = "/api/";

      this.getData = function(search:Object, old:boolean) {
         search["startReformatted"] = this.reformatDate(new Date(search["start"]));
         search["endReformatted"] = this.reformatDate(new Date(search["end"]));

         let headers = new Headers({ 'Content-Type': 'application/json' });
         let options = new RequestOptions({ headers: headers });
         if(old) {
            return _http.post(this.baseUrl+"search/old", search, options)
                        .map(this.extract)
                        .catch(this.handleError);
         } else {
            return _http.post(this.baseUrl+"search/new", search, options)
                        .map(this.extract)
                        .catch(this.handleError);
         }
      }

      this.getAllData = function(search:Object, old:boolean) {
         search["startReformatted"] = this.reformatDate(new Date(search["start"]));
         search["endReformatted"] = this.reformatDate(new Date(search["end"]));

         let headers = new Headers({ 'Content-Type': 'application/json' });
         let options = new RequestOptions({ headers: headers });
         if(old) {
            return _http.post(this.baseUrl+"search/old/all", search, options)
                        .map(this.extract)
                        .catch(this.handleError);
         } else {
            return _http.post(this.baseUrl+"search/new/all", search, options)
                        .map(this.extract)
                        .catch(this.handleError);
         }
      }

      this.getFundCategories = function() {
         return _http.get(this.baseUrl+"funds/categories")
                     .map(this.extract)
                     .catch(this.handleError);
      }

      this.getOldFunds = function(fundType:string) {
         return _http.get(this.baseUrl+"funds/old/"+fundType)
                     .map(this.extract)
                     .catch(this.handleError);
      }

      this.getNewFunds = function(fundType:string) {
         return _http.get(this.baseUrl+"funds/new/"+fundType)
                     .map(this.extract)
                     .catch(this.handleError);
      }

      this.getLocations = function(old:boolean) {
         if(old) {
            return _http.get(this.baseUrl+"locations/old")
                        .map(this.extract)
                        .catch(this.handleError);
         } else {
            return _http.get(this.baseUrl+"locations/new")
                        .map(this.extract)
                        .catch(this.handleError);
         }
      }

      // extract() and handleError() are partially from the Angular docs: https://angular.io/guide/http

      this.extract = function(response: Response) {
         let body;
         try {
            body = response.json();
         } catch (e) {
            if(!(e instanceof SyntaxError)) {
               console.error(e);
            } else {
               body = {"data": ""}; // On the first subscription result there is usually nothing, so this suppresses an unneeded error
            }
         }
         return body.data || body || {};
      }

      this.handleError = function(error: Response | any) {
         let errorMessage: string;
         if(error instanceof Response) {
            let body = error.json() || '';
            let err = body.message || JSON.stringify(body);
            errorMessage = `${error.status} - ${error.statusText || ""} ${err}`;
         } else {
            errorMessage = error.message ? error.message : error.toString();
         }
         console.error(errorMessage);
         return Observable.throw(errorMessage);
      }

      this.reformatDate = function(date: Date) {
         let dateString =  date.getFullYear().toString();
         dateString += (date.getMonth() < 10 ? '0'+(date.getMonth()+1) : (date.getMonth()+1));
         dateString += (date.getDate() < 10 ? '0'+date.getDate() : date.getDate());
         return dateString;
      }
   }
}
