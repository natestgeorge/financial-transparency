"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var DatabaseService = (function () {
    function DatabaseService(_http) {
        this.baseUrl = "http://10.141.90.31:5254/api/";
        this.getData = function (search) {
            search["startReformatted"] = this.reformatDate(new Date(search["start"]));
            search["endReformatted"] = this.reformatDate(new Date(search["end"]));
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            var options = new http_1.RequestOptions({ headers: headers });
            return _http.post(this.baseUrl + "search", search, options)
                .map(this.extract)
                .catch(this.handleError);
        };
        this.getAllData = function (search) {
            search["startReformatted"] = this.reformatDate(new Date(search["start"]));
            search["endReformatted"] = this.reformatDate(new Date(search["end"]));
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            var options = new http_1.RequestOptions({ headers: headers });
            return _http.post(this.baseUrl + "searchAll", search, options)
                .map(this.extract)
                .catch(this.handleError);
        };
        this.getFunds = function (fundType) {
            return _http.get(this.baseUrl + "funds/" + fundType)
                .map(this.extract)
                .catch(this.handleError);
        };
        this.getLocations = function () {
            return _http.get(this.baseUrl + "locations")
                .map(this.extract)
                .catch(this.handleError);
        };
        // extract() and handleError() are partially from the Angular docs: https://angular.io/guide/http
        this.extract = function (response) {
            var body;
            try {
                body = response.json();
            }
            catch (e) {
                if (!(e instanceof SyntaxError)) {
                    console.error(e);
                }
                else {
                    body = { "data": "" }; // On the first subscription result there is usually nothing, so this suppresses an unneeded error
                }
            }
            return body.data || body || {};
        };
        this.handleError = function (error) {
            var errorMessage;
            if (error instanceof http_1.Response) {
                var body = error.json() || '';
                var err = body.message || JSON.stringify(body);
                errorMessage = error.status + " - " + (error.statusText || "") + " " + err;
            }
            else {
                errorMessage = error.message ? error.message : error.toString();
            }
            console.error(errorMessage);
            return Observable_1.Observable.throw(errorMessage);
        };
        this.reformatDate = function (date) {
            var dateString = date.getFullYear().toString();
            dateString += (date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1));
            dateString += (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
            return dateString;
        };
    }
    DatabaseService.prototype.connect = function () { };
    ; // Observable<string>
    DatabaseService.prototype.getData = function (search) { };
    ;
    DatabaseService.prototype.getAllData = function (search) { };
    ;
    DatabaseService.prototype.getFunds = function (fundType) { };
    ;
    DatabaseService.prototype.getLocations = function () { };
    ;
    DatabaseService.prototype.extract = function (response) { };
    ;
    DatabaseService.prototype.handleError = function (error) { };
    ;
    DatabaseService.prototype.reformatDate = function (date) { };
    ;
    return DatabaseService;
}());
DatabaseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DatabaseService);
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=database.service.js.map