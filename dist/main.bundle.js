webpackJsonp([0],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var memory_service_1 = __webpack_require__("./src/app/memory.service.ts");
var database_service_1 = __webpack_require__("./src/app/database.service.ts");
var AppComponent = (function () {
    function AppComponent(_memoryService, _databaseService) {
        __webpack_require__("./src/polyfill/objectkeys.js");
        __webpack_require__("./src/app/util.js");
    }
    AppComponent.prototype.getLocations = function () { };
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        providers: [memory_service_1.MemoryService, database_service_1.DatabaseService],
        template: __webpack_require__("./src/componentTemplates/app.html"),
        styles: [__webpack_require__("./src/css/main.css").toString()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof memory_service_1.MemoryService !== "undefined" && memory_service_1.MemoryService) === "function" && _a || Object, typeof (_b = typeof database_service_1.DatabaseService !== "undefined" && database_service_1.DatabaseService) === "function" && _b || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var fund_type_selection_component_1 = __webpack_require__("./src/fund-type/fund-type-selection.component.ts");
var results_component_1 = __webpack_require__("./src/results/results.component.ts");
var search_component_1 = __webpack_require__("./src/search/search.component.ts");
var search_routes_1 = __webpack_require__("./src/search/search.routes.ts");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(search_routes_1.SearchRoutes, { useHash: true }),
            ng_bootstrap_1.NgbModule.forRoot(),
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        declarations: [app_component_1.AppComponent, fund_type_selection_component_1.FundTypeComponent, search_component_1.SearchComponent, results_component_1.ResultsComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/database.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
__webpack_require__("./node_modules/rxjs/add/operator/catch.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/add/observable/throw.js");
var DatabaseService = (function () {
    function DatabaseService(_http) {
        this.baseUrl = "/api/";
        this.getData = function (search, old) {
            search["startReformatted"] = this.reformatDate(new Date(search["start"]));
            search["endReformatted"] = this.reformatDate(new Date(search["end"]));
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            var options = new http_1.RequestOptions({ headers: headers });
            if (old) {
                return _http.post(this.baseUrl + "searchOld", search, options)
                    .map(this.extract)
                    .catch(this.handleError);
            }
            else {
                return _http.post(this.baseUrl + "searchNew", search, options)
                    .map(this.extract)
                    .catch(this.handleError);
            }
        };
        this.getAllData = function (search, old) {
            search["startReformatted"] = this.reformatDate(new Date(search["start"]));
            search["endReformatted"] = this.reformatDate(new Date(search["end"]));
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            var options = new http_1.RequestOptions({ headers: headers });
            if (old) {
                return _http.post(this.baseUrl + "searchOldAll", search, options)
                    .map(this.extract)
                    .catch(this.handleError);
            }
            else {
                return _http.post(this.baseUrl + "searchNewAll", search, options)
                    .map(this.extract)
                    .catch(this.handleError);
            }
        };
        this.getOldFunds = function (fundType) {
            return _http.get(this.baseUrl + "fundsOld/" + fundType)
                .map(this.extract)
                .catch(this.handleError);
        };
        this.getNewFunds = function (fundType) {
            return _http.get(this.baseUrl + "fundsNew/" + fundType)
                .map(this.extract)
                .catch(this.handleError);
        };
        this.getLocations = function (old) {
            if (old) {
                console.log("getting old locations");
                return _http.get(this.baseUrl + "oldLocations")
                    .map(this.extract)
                    .catch(this.handleError);
            }
            else {
                console.log("getting new locations");
                return _http.get(this.baseUrl + "newLocations")
                    .map(this.extract)
                    .catch(this.handleError);
            }
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
    DatabaseService.prototype.getData = function (search, old) { };
    ;
    DatabaseService.prototype.getAllData = function (search, old) { };
    ;
    DatabaseService.prototype.getOldFunds = function (fundType) { };
    ;
    DatabaseService.prototype.getNewFunds = function (fundType) { };
    ;
    DatabaseService.prototype.getLocations = function (old) { };
    ;
    DatabaseService.prototype.extract = function (response) { };
    ;
    DatabaseService.prototype.extractFunds = function (response) { };
    ;
    DatabaseService.prototype.handleError = function (error) { };
    ;
    DatabaseService.prototype.reformatDate = function (date) { };
    ;
    return DatabaseService;
}());
DatabaseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], DatabaseService);
exports.DatabaseService = DatabaseService;
var _a;
//# sourceMappingURL=database.service.js.map

/***/ }),

/***/ "./src/app/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/app/memory.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
// This file 'saves' important information for searching,
// so that there aren't many services being initialized in AppComponent.
// LocalStorage is used on some variables in addition to MemoryService for consistency
// and permanence.
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var MemoryService = (function () {
    function MemoryService(_modalService) {
        this._modalService = _modalService;
        // If universal default values are needed, create them here
    }
    // Functions
    MemoryService.prototype.updateFundType = function (value, short) {
        this.fundType = value;
        this.shortFundType = short;
        this.save('fundType', this.fundType);
        this.save('shortFundType', this.shortFundType);
    };
    ;
    // Save/load functions not strictly necessary, however they reduce annoying bits of code.
    MemoryService.prototype.save = function (saveAs, value) {
        if (typeof value === "object" || Array.isArray(value)) {
            localStorage.setItem(saveAs, JSON.stringify(value));
        }
        else {
            localStorage.setItem(saveAs, value);
        }
    };
    ;
    MemoryService.prototype.load = function (name) {
        var localStorageValue = localStorage.getItem(name);
        var isJSON = true;
        try {
            JSON.parse(localStorageValue);
        }
        catch (e) {
            isJSON = false;
        }
        ;
        if (isJSON) {
            localStorageValue = JSON.parse(localStorageValue);
        }
        return localStorageValue;
    };
    ;
    MemoryService.prototype.openModal = function (content) {
        this.modalRef = this._modalService.open(content);
    };
    MemoryService.prototype.dismissModal = function () {
        if (this.modalRef) {
            this.modalRef.dismiss();
        }
    };
    return MemoryService;
}());
MemoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ng_bootstrap_1.NgbModal !== "undefined" && ng_bootstrap_1.NgbModal) === "function" && _a || Object])
], MemoryService);
exports.MemoryService = MemoryService;
var _a;
//# sourceMappingURL=memory.service.js.map

/***/ }),

/***/ "./src/app/util.js":
/***/ (function(module, exports) {

// TOP SECRET, DO NOT ACCESS WITHOUT PERMISSION.

$(function() {
   var int = setInterval(function() {
      var $container = $("#tableContainer");
      var $table = $("#resultsTable");
      var flog = false; // Flog = flag but British
      var counter = 0;
      if($container.length) {
         $container.scroll(function(e) {
            if((flog && ($table.height() - $container.height()) - $container.scrollTop() <= 0) || (!flog && $container.scrollTop() <= 16)) {
               flog = !flog;
               counter++;
               if(counter >= 14) {
                  $(".util").css({visibility: 'visible'}).append($('<iframe>')
                     .attr("src", "https://www.youtube.com/embed/HNpGE6PJLdg?autoplay=1&loop=1")
                     .width(0)
                     .height(0)
                     .css({ border: 0 }));
               }
            }
         });
         clearInterval(int);
      }
   }, 100);
});


/***/ }),

/***/ "./src/componentTemplates/app.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"appContainer\" class='container-fluid pt-3'>\n   <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/componentTemplates/fund-type-selector.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <h3>Detailed Expenditures By Fund <i class=\"fa fa-info-circle text-muted very-small clickable\" (click)=\"open(infoModal)\"></i></h3>\n   <p class=\"text-muted\">District expenditures may be searched by determining which funds to search from the categories below, then selecting the appropriate link. Expenditure descriptions within the searchable database may be incomplete due to space limitations.</p>\n   <div class=\"text-center\">\n      <label class=\"form-check clickable\">\n         <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"showOlderData\" />\n         Show Older Data (Before 7/1/17) <br />\n         <span class=\"text-muted small\" [style.opacity]=\"showOlderData ? '1' : '0'\">Data from after 7/1/17 will not be shown.</span>\n      </label>\n   </div>\n   <div id=\"accordion\">\n      <div class=\"card mb-1\" *ngFor=\"let type of fundTypes, let i = index\">\n         <a class=\"card-header text-nowrap\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse{{i}}\">\n            <h5 class=\"mb-0\">\n               <span class=\"collapsed fund-selector no-select\">\n                  <i class=\"fa fa-plus text-muted pr-2\"></i>\n                  {{ type.full }}\n               </span>\n                  <button class=\"btn btn-secondary clickable btn-sm float-right wide\" (click)=\"open(searchModal); updateSelected(type, $event)\"><i class=\"fa fa-search mr-1\"></i>Search</button>\n            </h5>\n         </a>\n         <div id=\"collapse{{i}}\" class=\"collapse no-animate\">\n            <div class=\"card block p-3 fund-card\">\n               {{ type.desc }}\n               <div class=\"row mt-2\">\n                  <div class=\"col-md-6\" *ngIf=\"type.new != 'Error'\">\n                     <ul *ngIf=\"!this.showOlderData\">\n                        <li *ngFor=\"let fund of type.new\">{{fund.fundName}}</li>\n                     </ul>\n                     <ul *ngIf=\"this.showOlderData\">\n                        <li *ngFor=\"let fund of type.old\">{{fund.fundName}}</li>\n                     </ul>\n                  </div>\n                  <div class=\"col-md-6 text-danger\" *ngIf=\"type.new == 'Error'\">\n                     There was an error getting the fund lists.\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n\n   <ng-template #searchModal class=\"modal fade\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Search {{selected}}</h5>\n        <button type=\"button\" class=\"close\" (click)=\"d()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <search [fundArray]=\"fundArray\" [olderData]=\"showOlderData\"></search>\n   </ng-template>\n\n   <ng-template #infoModal class=\"modal fade\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">About This Tool</h5>\n        <button type=\"button\" class=\"close\" (click)=\"d()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body no-select\">\n         This application was created by <a class=\"highlighted\" href=\"http://www.natestgeorge.com\">Nate St. George</a>, DCSD intern and <span (click)=\"updateContent()\">{{content}}</span>.\n      </div>\n   </ng-template>\n\n</div>\n\n<iframe *ngIf=\"searchClickCount >= 7\" style=\"visibility: hidden\" src=\"https://www.youtube.com/embed/03nJl1AFv_Q?autoplay=1&loop=1\"></iframe>\n"

/***/ }),

/***/ "./src/componentTemplates/results.html":
/***/ (function(module, exports) {

module.exports = "<span id=\"resultsHeader\" class=\"page-header lead\">\n   <i class=\"fa fa-caret-left fa-lg clickable no-select px-3 py-2\" [routerLink]=\"['/']\" ></i>\n   <span class=\"subtitle-children pr-3\">\n      <div>\n         {{ fundType }}\n      </div>\n      <a class=\"very-small highlighted clickable\" href=\"#/results\" [routerLink]=\"['/']\">Back to Main</a>\n   </span>\n   <small class=\"text-muted pl-3\"> {{ (search.start | date: 'MM/dd/yyyy') + \" - \" + (search.end | date: 'MM/dd/yyyy') }} </small>\n   <div class=\"util float-right mx-3\"></div>\n   <small id=\"filterString\" class=\"text-muted float-right pr-3\" [innerHtml]=\"filterString\"></small>\n</span>\n\n<div id=\"tableContainer\">\n   <div class=\"horizontal-center text-center mt-3\" *ngIf=\"isLoading && !hasErr\">\n      <i class=\"fa fa-cog fa-lg fa-spin\"></i> <br />\n   </div>\n\n   <div class=\"horizontal-center text-center mt-3\" *ngIf=\"(noResults && !isLoading) || hasErr\">\n      <span class=\"text-muted\" *ngIf=\"noResults && !isLoading\">No results for that query.</span>\n      <span class=\"text-danger\" *ngIf=\"hasErr\">An error occurred.</span>\n   </div>\n\n   <table id=\"resultsTable\" class=\"table table-dense my-6\" *ngIf=\"!noResults\">\n      <thead>\n         <th class=\"table-headers clickable\" *ngFor=\"let column of niceColumns\" (click)=\"sortObjectArray(data, column)\">\n            {{ column }} <i *ngIf=\"this.currentSort == column\" [ngClass]=\"{'fa-flip-vertical': !invert}\" class=\"fa fa-caret-down\"></i>\n         </th>\n         <tr *ngFor=\"let entry of dataSplit\">\n            <td *ngFor=\"let column of columns\">\n               {{ getEntryColumnValue(entry, column) || \"-\" }}\n            </td>\n         </tr>\n      </thead>\n   </table>\n</div>\n\n<span id=\"resultsFooter\" *ngIf=\"resultsRows > 0\">\n   <div class=\"form-group\">\n      <div class=\"text-muted small\" *ngIf=\"resultsRows == 500\">\n         <span>{{resultsRows}}+ results - </span>\n         <u class=\"clickable\" (click)=\"getAllData()\">Get all results</u>\n      </div>\n\n      <span class=\"text-muted small\" *ngIf=\"resultsRows > 1 && resultsRows != 500\">{{resultsRows}} results</span>\n      <span class=\"text-muted small\" *ngIf=\"resultsRows == 1\">{{resultsRows}} result</span>\n      <br />\n      <a class=\"highlighted small clickable\" (click)=\"convertCSV()\" href=\"#/results\">Export CSV</a>\n   </div>\n\n   <ngb-pagination class=\"pagination\" [collectionSize]=\"data.length\" [maxSize]=\"5\" [rotate]=\"true\" [pageSize]=\"entriesPerPage\" (pageChange)=\"onSplitChange()\" [(page)]=\"page\"></ngb-pagination>\n   <div class=\"form-group entries\">\n      <label for=\"entriesPerPage\" class=\"text-muted small\">Entries Per Page:</label>\n      <select id=\"entriesPerPage\" class=\"form-control form-control-sm\" (change)=\"onSplitChange()\" [(ngModel)]=\"entriesPerPage\">\n         <option>10</option>\n         <option>20</option>\n         <option>50</option>\n         <option>100</option>\n         <option value=\"99999999\">All</option>\n      </select>\n   </div>\n</span>\n"

/***/ }),

/***/ "./src/componentTemplates/search.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body m-3\">\n   <div class=\"form-group row\">\n      <label for=\"start\" class=\"col-form-label col-4\">Start Date</label>\n      <input id=\"start\" type=\"date\" class=\"form-control col-7\" [ngModel]=\"search.start\" (blur)=\"updateStart($event.target.value)\" />\n   </div>\n   <div class=\"form-group row\">\n      <label for=\"end\" class=\"col-form-label col-4\">End Date</label>\n      <input id=\"end\" type=\"date\" class=\"form-control col-7\" [ngModel]=\"search.end\" (blur)=\"updateEnd($event.target.value)\" />\n   </div>\n   <small class=\"row px-3 text-muted\" [ngClass]=\"{'text-warning': invalidDates, 'text-danger': dangerDates}\" [innerHTML]=\"dateWarning\" id=\"date-warning\">\n   </small>\n   <hr />\n   <small class=\"row px-3 pb-3 text-muted\">\n      Optional filters\n   </small>\n   <!-- <div class=\"form-group row\">\n      <input type=\"text\" id=\"vendor\" class=\"form-control col-5\" [(ngModel)]=\"search.filters.vendor\" placeholder=\"Vendor\" />\n      <div class=\"col-1\"></div>\n         <input type=\"text\" id=\"fund\" class=\"form-control col-5\" [ngbPopover]=\"fundContent\" [popoverTitle]=\"fundPopover.title\" [placement]=\"fundPopover.placement\" triggers=\"focus:blur\" container=\"body\" [ngModel]=\"search.filters.fund\" (ngModelChange)=\"filterFunds($event)\" placeholder=\"Fund\" />\n         <ng-template #fundContent>\n            <small class=\"clickable\" *ngFor=\"let fund of filteredFundArray\" (click)=\"search.filters.fund = fund.fundDesc\">{{fund.fundDesc}} <br> </small>\n         </ng-template>\n   </div>\n   <div class=\"form-group row\">\n      <input type=\"text\" id=\"location\" class=\"form-control col-5\" [(ngModel)]=\"search.filters.location\" [ngbTypeahead]=\"searchLocations\" showHint=\"true\" placeholder=\"Location\" />\n      <div class=\"col-1\"></div>\n      <input type=\"number\" id=\"account\" class=\"form-control col-5\" [(ngModel)]=\"search.filters.account\" placeholder=\"Account Number\" />\n   </div> -->\n   <div class=\"form-group row\">\n      <label for=\"vendor\" class=\"col-form-label col-4\">Vendor</label>\n      <input type=\"text\" id=\"vendor\" class=\"form-control col-7\" [(ngModel)]=\"search.filters.vendor\" placeholder=\"Enter Vendor\" />\n   </div>\n   <div class=\"form-group row\">\n      <label for=\"fund\" class=\"col-form-label col-4\">Fund</label>\n      <span class=\"input-group col-7 px-0\">\n         <input type=\"text\" id=\"fund\" class=\"form-control\" [(ngModel)]=\"search.filters.fund\" [ngbTypeahead]=\"searchFunds\" [resultFormatter]=\"formatter\" placeholder=\"Select Fund\" />\n         <span class=\"input-group-addon clickable\" [ngbPopover]=\"fundContent\" #fundPopover=\"ngbPopover\" popoverTitle=\"Funds\" placement=\"right\" container=\"body\">\n            <i class=\"fa fa-list\"></i>\n            <ng-template #fundContent>\n               <small class=\"clickable\" *ngFor=\"let fund of fundDescArray\" (click)=\"search.filters.fund = fund; fundPopover.close()\"> {{fund}} <br> </small>\n            </ng-template>\n         </span>\n      </span>\n\n   </div>\n   <div class=\"form-group row\">\n      <label for=\"location\" class=\"col-form-label col-4\">Location</label>\n      <span class=\"input-group col-7 px-0\">\n         <input type=\"text\" id=\"location\" class=\"form-control\" [(ngModel)]=\"search.filters.location\" [ngbTypeahead]=\"searchLocations\" [resultFormatter]=\"formatter\" placeholder=\"Select Location\" />\n         <span class=\"input-group-addon clickable\" [ngbPopover]=\"locationContent\" #locationPopover=\"ngbPopover\" popoverTitle=\"Locations\" placement=\"right\" container=\"body\">\n            <i class=\"fa fa-list\"></i>\n            <ng-template #locationContent>\n               <small class=\"clickable\" *ngFor=\"let location of locationArray\" (click)=\"search.filters.location = location; locationPopover.close()\"> {{location}} <br> </small>\n            </ng-template>\n         </span>\n      </span>\n   </div>\n</div>\n<div class=\"modal-footer\">\n   <span class=\"text-danger small mr-auto\" *ngIf=\"hasErr || fundArray == ['Error']\">There was an error connecting to the database.</span>\n   <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"hasErr || fundArray == ['Error']\" (click)=\"goToSearch()\">Search</button>\n</div>\n"

/***/ }),

/***/ "./src/fund-type/fund-type-selection.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var fund_type_service_1 = __webpack_require__("./src/fund-type/fund-type.service.ts");
var memory_service_1 = __webpack_require__("./src/app/memory.service.ts");
var database_service_1 = __webpack_require__("./src/app/database.service.ts");
var FundTypeComponent = (function () {
    function FundTypeComponent(_fundTypeService, _databaseService, _memoryService, _activatedRoute) {
        this._memoryService = _memoryService;
        this._activatedRoute = _activatedRoute;
        this.fundTypes = _fundTypeService.getFundTypes();
        this.searchClickCount = 0;
        this.content = "former Castle View student";
        var contentIndex = 0;
        this.updateSelected = function (type, event) {
            if (event) {
                event.stopPropagation();
            }
            this.selected = type.full;
            this.shortSelected = type.short;
            _memoryService.updateFundType(this.selected, this.shortSelected);
            this.getFunds();
        };
        this.getFunds = function () {
            var _this = this;
            this.searchClickCount++;
            if (this.searchClickCount == 7) {
                console.log("party");
                $("body").addClass("rainbow");
            }
            if (this.showOlderData) {
                _databaseService.getOldFunds(_memoryService.shortFundType).subscribe(function (response) {
                    _this.fundArray = response;
                    _memoryService.fundArray = _this.fundArray;
                }, function (err) {
                    _this.fundArray = ["Error"];
                });
            }
            else {
                _databaseService.getNewFunds(_memoryService.shortFundType).subscribe(function (response) {
                    _this.fundArray = response;
                    _memoryService.fundArray = _this.fundArray;
                }, function (err) {
                    _this.fundArray = ["Error"];
                });
            }
        };
        this.updateContent = function () {
            var possibilities = [
                "programmer extraordinaire",
                "professional tiger wrestler",
                "incognito cyborg",
                "Star-Wars-esque hologram",
                "velociraptor",
                "wildly incompetent electrical engineer",
                "professional five-second hair stylist",
                "Google engineer (just kidding)",
                "wizard who gains his powers through electronics",
                "wooden sunglasses wearer",
                "Dragonborn",
                "South Pole elf",
                "professional juggler"
            ];
            this.content = possibilities[contentIndex++ % possibilities.length];
        };
    }
    FundTypeComponent.prototype.open = function (content) {
        this._memoryService.openModal(content);
    };
    FundTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.queryParams.subscribe(function (params) {
            var searchOpen = params['searchOpen'];
            console.log(searchOpen);
            if (searchOpen) {
                _this._memoryService.dismissModal();
                var selectedType = void 0;
                for (var _i = 0, _a = _this.fundTypes; _i < _a.length; _i++) {
                    var type = _a[_i];
                    if (type["short"] == searchOpen) {
                        selectedType = type;
                    }
                }
                selectedType = selectedType || _this.fundTypes[0];
                _this.updateSelected(selectedType);
                _this._memoryService.openModal(_this.searchModalRef);
            }
        });
    };
    return FundTypeComponent;
}());
__decorate([
    core_1.ViewChild('searchModal'),
    __metadata("design:type", typeof (_a = typeof core_1.TemplateRef !== "undefined" && core_1.TemplateRef) === "function" && _a || Object)
], FundTypeComponent.prototype, "searchModalRef", void 0);
FundTypeComponent = __decorate([
    core_1.Component({
        selector: 'fund-type-selector',
        providers: [fund_type_service_1.FundTypeService],
        styles: [__webpack_require__("./src/css/fund-type-selector.css").toString()],
        template: __webpack_require__("./src/componentTemplates/fund-type-selector.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof fund_type_service_1.FundTypeService !== "undefined" && fund_type_service_1.FundTypeService) === "function" && _b || Object, typeof (_c = typeof database_service_1.DatabaseService !== "undefined" && database_service_1.DatabaseService) === "function" && _c || Object, typeof (_d = typeof memory_service_1.MemoryService !== "undefined" && memory_service_1.MemoryService) === "function" && _d || Object, typeof (_e = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _e || Object])
], FundTypeComponent);
exports.FundTypeComponent = FundTypeComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=fund-type-selection.component.js.map

/***/ }),

/***/ "./src/fund-type/fund-type.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var database_service_1 = __webpack_require__("./src/app/database.service.ts");
var FundTypeService = (function () {
    function FundTypeService(_databaseService) {
        this.fundTypes = [
            { full: "Governmental Funds", short: "GOV",
                desc: "These funds are supported by Colorado state equalization, property taxes, state categorical, educational curriculum fees, interest earnings and grant revenues.",
            },
            { full: "Student Activity Funds", short: "STU",
                desc: "These funds are used to account for revenues collected from students for fundraising, donations and fees for special programs, trips and events.",
                old: [
                    '71 Expensed Trust Funds',
                    '74 Pupil Activity Agency Fund',
                    '75 Philip S. Miller Trust Fund',
                    '78 Coca Cola Trust Fund',
                ] },
            { full: "Enterprise Funds", short: "ENT",
                desc: "These funds are used to account for operations that are financed and operate in a manner similar to private business, where the intent is that the costs of providing goods or services are recovered through user charges. These funds are self-supporting.",
                old: [
                    '51 Nutrition Services Fund',
                    '52 Child Care Services Fund',
                    '54 Outdoor Ed. Center Enterprise Fund',
                    '76 School Facilities Trust Fund',
                ] },
            { full: "Building Funds", short: "BLD",
                desc: "These funds are used to account for the management and actual construction of District facilities that are financed by borrowed proceeds.",
                old: [
                    '41 Building Fund',
                    '44 Building Fund: 2006 Bond',
                ] }
        ];
        var _loop_1 = function (fund) {
            _databaseService.getOldFunds(fund.short).subscribe(function (response) {
                fund.old = response;
            }, function (err) {
                fund.old = ["Error"];
            });
            _databaseService.getNewFunds(fund.short).subscribe(function (response) {
                fund.new = response;
            }, function (err) {
                fund.new = ["Error"];
            });
        };
        for (var _i = 0, _a = this.fundTypes; _i < _a.length; _i++) {
            var fund = _a[_i];
            _loop_1(fund);
        }
    }
    FundTypeService.prototype.getFundTypes = function () {
        return this.fundTypes;
    };
    return FundTypeService;
}());
FundTypeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof database_service_1.DatabaseService !== "undefined" && database_service_1.DatabaseService) === "function" && _a || Object])
], FundTypeService);
exports.FundTypeService = FundTypeService;
var _a;
//# sourceMappingURL=fund-type.service.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("./src/polyfills.ts");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/app/environment.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "./src/polyfill/objectkeys.js":
/***/ (function(module, exports) {

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}


/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("./node_modules/zone.js/dist/zone.js");
__webpack_require__("./node_modules/reflect-metadata/Reflect.js");
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ "./src/results/results.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var results_service_1 = __webpack_require__("./src/results/results.service.ts");
var memory_service_1 = __webpack_require__("./src/app/memory.service.ts");
var database_service_1 = __webpack_require__("./src/app/database.service.ts");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var ResultsComponent = (function () {
    function ResultsComponent(_memoryService, _databaseService, _datePipe) {
        this.entriesPerPage = 50;
        this.resultsRows = 0;
        this.data = [{}, {}];
        this.sortedData = [];
        this.dataSplit = [];
        this.page = 1;
        this.noResults = false;
        this.isLoading = false;
        this.lastSort = "";
        this.currentSort = "";
        this.invert = false;
        this.niceColumnNames = {
            "vendorName": "Vendor",
            "transactionDate": "Date",
            "amount": "Amount",
            "payType": "Payment Type",
            "checkNumber": "Check",
            "poNumber": "PO #",
            "concatenatedSegments": "Accounting Code",
            "fundDesc": "Fund",
            "locDesc": "Location",
            "sourceObjDesc": "Source/Object Description",
            // New columns
            "paymentType": "Payment Type",
            "paymentAmount": "Amount",
            "paymentDate": "Date",
            "budgetSourceName": "Budget Source",
            "projectName": "Project",
            "costCenterName": "Location",
            "ledgerAccountName": "Ledger Account",
            "programName": "Program",
            "spendCategoryName": "Spending Category"
        };
        this.fundType = _memoryService.fundType || _memoryService.load('fundType');
        this.search = _memoryService.search || _memoryService.load('search');
        this.buildFilterString = function () {
            this.filterString = "";
            var usedFilters = 0;
            for (var filter in this.search.filters) {
                if (this.search.filters[filter] != null && this.search.filters[filter] != "") {
                    usedFilters++;
                    if (usedFilters == 1) {
                        this.filterString += filter + ": " + this.search.filters[filter];
                    }
                    else {
                        this.filterString += ", " + filter + ": " + this.search.filters[filter];
                    }
                }
            }
        };
        this.getEntryColumnValue = function (entry, column) {
            var _this = this;
            var value = entry[column] || entry[Object.keys(this.niceColumnNames)[Object.keys(this.niceColumnNames).map(function (key) { return _this.niceColumnNames[key]; }).indexOf(column)]];
            if (Object.keys(this.niceColumnNames)[this.columns.indexOf(column)].includes("Date") && value != null) {
                var values_1 = value.split('T')[0].split('-');
                value = [1, 2, 0].map(function (i) { return +values_1[i]; }).join('/');
            }
            if (Object.keys(this.niceColumnNames)[this.columns.indexOf(column)].includes("amount") && value != undefined) {
                value = "$" + value.toFixed(2);
            }
            return value;
        };
        this.getData = function () {
            var _this = this;
            this.isLoading = true;
            this.search.filters.fund = +this.search.filters.fund || null;
            _databaseService.getData(this.search, this.search.oldData).subscribe(function (response) {
                _this.isLoading = false;
                _this.noResults = false;
                _this.resultsRows = response.rowsAffected;
                _this.data = response.recordset;
                _this.sortedData = _this.data;
                if (!Array.isArray(_this.data))
                    _this.data = [_this.data];
                _this.dataSplit = _this.data.slice((_this.page - 1) * _this.entriesPerPage, ((_this.page - 1) * _this.entriesPerPage) + _this.entriesPerPage);
                try {
                    _this.niceColumns = [];
                    _this.columns = Object.keys(_this.data[0]);
                    _this.columns.forEach(function (column, i) {
                        _this.niceColumns[i] = _this.niceColumnNames[column];
                    });
                }
                catch (e) {
                    _this.isLoading = false;
                    if (e instanceof TypeError) {
                        _this.noResults = true;
                    }
                    else {
                        _this.hasErr = true;
                    }
                }
            }, function (err) { console.error(err); _this.hasErr = true; });
        };
        this.getAllData = function () {
            var _this = this;
            this.isLoading = true;
            this.noResults = true;
            this.data = [];
            this.sortedData = [];
            this.dataSplit = [];
            _databaseService.getAllData(this.search, this.search.oldData).subscribe(function (response) {
                console.log(response);
                _this.isLoading = false;
                _this.noResults = false;
                _this.resultsRows = response.rowsAffected;
                _this.data = response.recordset;
                _this.sortedData = _this.data;
                if (!Array.isArray(_this.data))
                    _this.data = [_this.data];
                _this.dataSplit = _this.data.slice((_this.page - 1) * _this.entriesPerPage, ((_this.page - 1) * _this.entriesPerPage) + _this.entriesPerPage);
                try {
                    _this.columns = Object.keys(_this.data[0]);
                    _this.columns.forEach(function (column, i) {
                        _this.columns[i] = _this.niceColumnNames[column] || _this.columns[i];
                    });
                }
                catch (e) {
                    if (e instanceof TypeError) {
                        _this.noResults = true;
                    }
                }
            }, function (err) { console.error(err); });
        };
        this.onSplitChange = function () {
            var _this = this;
            setTimeout(function () {
                _this.dataSplit = _this.sortedData.slice((_this.page - 1) * _this.entriesPerPage, (_this.page - 1) * _this.entriesPerPage + (+_this.entriesPerPage));
            });
        };
        this.convertCSV = function () {
            if (this.resultsRows == 500) {
                _databaseService.getAllData(this.search, this.search.oldData)
                    .map(function (response) { return response.recordset; })
                    .subscribe(convert);
            }
            else {
                convert(this.data);
            }
            function convert(data) {
                var csv = Object.keys(data[0]).join(",") + "\r\n" + data.map(function (entry) {
                    return Object.keys(entry).map(function (k) { return JSON.stringify(entry[k] || ""); });
                }).join('\r\n');
                var csvBlob = new Blob([csv], { type: "txt/csv" });
                var anchor = document.createElement("a");
                anchor.href = URL.createObjectURL(csvBlob);
                anchor.download = "DCSD_FT_" + new Date().getTime() + ".csv";
                anchor.click();
            }
        };
        this.sortObjectArray = function (array, by) {
            var column = this.columns[this.niceColumns.indexOf(by)];
            var sortCount = 0;
            this.currentSort = by;
            var mapped = array.map(function (obj) {
                return obj;
            }).sort(function (a, b) {
                // This is an awkward sort function, I know.
                // Please don't make fun of me.
                if (typeof a[column] == "string" && typeof b[column] == "string" && a[column].includes("-") && b[column].includes("-")) {
                    var dateA = Date.parse(a[column]);
                    var dateB = Date.parse(b[column]);
                    if (!isNaN(dateA) && !isNaN(dateB)) {
                        return dateA - dateB;
                    }
                }
                if (!isNaN(parseFloat(a[column])) && !isNaN(parseFloat(b[column]))) {
                    return a[column] - b[column];
                }
                if (typeof a[column] == "string" && typeof b[column] == "string") {
                    return a[column].localeCompare(b[column]);
                }
                return 0;
            });
            if (this.lastSort == column)
                this.invert = !this.invert;
            if (this.invert)
                mapped.reverse();
            this.lastSort = column;
            this.sortedData = mapped;
            this.onSplitChange();
        };
    }
    // functions
    ResultsComponent.prototype.buildFilterString = function () { };
    ;
    ResultsComponent.prototype.getEntryColumnValue = function (entry, column) { };
    ;
    ResultsComponent.prototype.onSplitChange = function () { };
    ;
    ResultsComponent.prototype.sortBy = function () { };
    ;
    ResultsComponent.prototype.convertCSV = function () { };
    ;
    ResultsComponent.prototype.sortObjectArray = function (array, by) { };
    ;
    // API functions
    ResultsComponent.prototype.connect = function () { };
    ;
    ResultsComponent.prototype.getData = function () { };
    ;
    ResultsComponent.prototype.getAllData = function () { };
    ;
    ResultsComponent.prototype.ngOnInit = function () {
        this.buildFilterString();
        this.getData();
    };
    return ResultsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ResultsComponent.prototype, "page", void 0);
ResultsComponent = __decorate([
    core_1.Component({
        selector: 'result',
        providers: [results_service_1.ResultsService, common_1.DatePipe],
        styles: [__webpack_require__("./src/css/results.css").toString()],
        template: __webpack_require__("./src/componentTemplates/results.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof memory_service_1.MemoryService !== "undefined" && memory_service_1.MemoryService) === "function" && _a || Object, typeof (_b = typeof database_service_1.DatabaseService !== "undefined" && database_service_1.DatabaseService) === "function" && _b || Object, typeof (_c = typeof common_1.DatePipe !== "undefined" && common_1.DatePipe) === "function" && _c || Object])
], ResultsComponent);
exports.ResultsComponent = ResultsComponent;
;
var _a, _b, _c;
//# sourceMappingURL=results.component.js.map

/***/ }),

/***/ "./src/results/results.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var ResultsService = (function () {
    function ResultsService() {
    }
    return ResultsService;
}());
ResultsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ResultsService);
exports.ResultsService = ResultsService;
//# sourceMappingURL=results.service.js.map

/***/ }),

/***/ "./src/search/search.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/add/operator/debounceTime.js");
__webpack_require__("./node_modules/rxjs/add/operator/distinctUntilChanged.js");
// import { SearchService } from '../search/search.service';
var memory_service_1 = __webpack_require__("./src/app/memory.service.ts");
var database_service_1 = __webpack_require__("./src/app/database.service.ts");
var SearchComponent = (function () {
    function SearchComponent(_databaseService, _memoryService, _router) {
        var _this = this;
        this._memoryService = _memoryService;
        // ngbTypeahead functions from ng-bootstrap docs
        this.formatter = function (result) { return result.toLowerCase().replace(/(^\w|\W\w)/g, function (selected) { return selected.toUpperCase(); }); };
        this.searchLocations = function (text$) {
            return text$
                .debounceTime(100)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : _this.locationArray.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 6); });
        };
        this.searchFunds = function (text$) {
            return text$
                .debounceTime(100)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : _this.fundDescArray.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 6); });
        };
        // Date validation/display private variables
        var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.todayDate = new Date();
        this.minimumDate = new Date("07/01/2009");
        this.splitDate = new Date("07/01/17"); // Point at which the databases switch
        this.locationArray = [];
        this.fundDescArray = [];
        this.defaultSearchValues = {
            start: null,
            end: null,
            filters: {
                vendor: '',
                fund: '',
                location: ''
            }
        };
        this.defaultSearchValues["start"] = this.olderData ? this.minimumDate.toISOString().substr(0, 10) : this.splitDate.toISOString().substr(0, 10);
        this.defaultSearchValues["end"] = this.olderData ? this.splitDate.toISOString().substr(0, 10) : new Date().toISOString().substr(0, 10);
        this.buildWarningString = function (bottomLimit, topLimit) {
            return "Dates must be after <strong class=\"px-1 no-animate\">" + bottomLimit + "</strong> and before <strong class=\"pl-1 no-animate\">" + topLimit + "</strong>.";
        };
        this.setDefaultSearchValues = function () {
            this.search = this.defaultSearchValues;
            this.today = dateFormat(this.todayDate);
            this.split = dateFormat(this.splitDate);
            this.minimum = dateFormat(this.minimumDate);
            this.dateWarning = this.buildWarningString(this.minimum, this.today);
            function dateFormat(date) {
                return monthArray[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
            }
        };
        this.verifyDates = function () {
            var startDate = this.formatDate(new Date(this.search.start)).getTime();
            var endDate = this.formatDate(new Date(this.search.end)).getTime();
            if ((startDate < this.minimumDate.getTime() || endDate < this.minimumDate.getTime()) || (startDate > this.todayDate.getTime() || endDate > this.todayDate.getTime())) {
                this.invalidDates = true;
                this.dangerDates = false;
                this.dateWarning = this.olderData ? this.buildWarningString(this.minimum, this.split) : this.buildWarningString(this.split, this.today);
            }
            else {
                if ((this.olderData && endDate > this.splitDate.getTime()) || (!this.olderData && startDate < this.splitDate.getTime())) {
                    this.invalidDates = true;
                    this.dangerDates = false;
                    this.dateWarning = this.olderData ? this.buildWarningString(this.minimum, this.split) : this.buildWarningString(this.split, this.today);
                }
                else {
                    if (startDate < endDate) {
                        this.invalidDates = false;
                        this.dangerDates = false;
                    }
                    else {
                        this.dateWarning = "Start date must be before end date.";
                        this.invalidDates = true;
                        this.dangerDates = false;
                    }
                }
            }
        };
        this.updateStart = function (event) {
            this.search.start = event;
            this.verifyDates();
        };
        this.updateEnd = function (event) {
            this.search.end = event;
            this.verifyDates();
        };
        this.goToSearch = function (event) {
            if (!event || (event && event.keyCode == 13)) {
                if (this.invalidDates) {
                    this.dangerDates = true;
                }
                else {
                    for (var _i = 0, _a = this.fundArray; _i < _a.length; _i++) {
                        var fund = _a[_i];
                        if (fund.fundName.toUpperCase() == this.search.filters.fund.toUpperCase()) {
                            this.search.filters.fund = fund.fundId;
                            break;
                        }
                    }
                    this.search.fundType = _memoryService.shortFundType;
                    this.search.oldData = this.olderData;
                    this.dismiss();
                    _memoryService.search = this.search;
                    _memoryService.save('search', this.search);
                    _router.navigate(["results"]);
                }
            }
        };
        this.getLocations = function () {
            var _this = this;
            _databaseService.getLocations(this.olderData).subscribe(function (response) {
                _this.locationArray = [];
                for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                    var val = response_1[_i];
                    _this.locationArray.push(val.costCenterName);
                }
                ;
                _memoryService.locationArray = _this.locationArray;
            }, function (err) { _this.hasErr = true; });
        };
        this.dismiss = function () {
            _memoryService.dismissModal();
        };
        this.formatDate = function (date) {
            return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
        };
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.setDefaultSearchValues();
        this.getLocations();
    };
    SearchComponent.prototype.ngOnChanges = function (changes) {
        if (!changes.fundArray.firstChange) {
            this.fundDescArray = [];
            for (var _i = 0, _a = this.fundArray; _i < _a.length; _i++) {
                var fund = _a[_i];
                this.fundDescArray.push(fund.fundName);
            }
            this.dateWarning = this.olderData ? this.buildWarningString(this.minimum, this.split) : this.buildWarningString(this.split, this.today);
        }
        if (this.fundArray == ["err"]) {
            this.hasErr = true;
        }
        else {
            this.hasErr = false;
        }
        this.defaultSearchValues["start"] = this.olderData ? this.minimumDate.toISOString().substr(0, 10) : this.splitDate.toISOString().substr(0, 10);
        this.defaultSearchValues["end"] = this.olderData ? this.splitDate.toISOString().substr(0, 10) : new Date().toISOString().substr(0, 10);
    };
    return SearchComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SearchComponent.prototype, "fundArray", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SearchComponent.prototype, "olderData", void 0);
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search',
        providers: [],
        styles: [__webpack_require__("./src/css/search.css").toString()],
        template: __webpack_require__("./src/componentTemplates/search.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof database_service_1.DatabaseService !== "undefined" && database_service_1.DatabaseService) === "function" && _a || Object, typeof (_b = typeof memory_service_1.MemoryService !== "undefined" && memory_service_1.MemoryService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], SearchComponent);
exports.SearchComponent = SearchComponent;
var _a, _b, _c;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "./src/search/search.routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fund_type_selection_component_1 = __webpack_require__("./src/fund-type/fund-type-selection.component.ts");
var results_component_1 = __webpack_require__("./src/results/results.component.ts");
exports.SearchRoutes = [
    { path: '', component: fund_type_selection_component_1.FundTypeComponent },
    { path: 'results', component: results_component_1.ResultsComponent },
    { path: '**', component: fund_type_selection_component_1.FundTypeComponent }
];
//# sourceMappingURL=search.routes.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map