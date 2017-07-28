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
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var search_service_1 = require("../search/search.service");
var memory_service_1 = require("../app/memory.service");
var database_service_1 = require("../app/database.service");
var SearchComponent = (function () {
    function SearchComponent(_searchService, _databaseService, _memoryService, _router) {
        var _this = this;
        this._memoryService = _memoryService;
        // ngbTypeahead functions from ng-bootstrap docs
        this.formatter = function (result) { return result.toLowerCase().replace(/(^\w|\W\w)/g, function (selected) { return selected.toUpperCase(); }); };
        this.searchLocations = function (text$) {
            return text$
                .debounceTime(100)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : _this.locationArray.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); });
        };
        this.searchFunds = function (text$) {
            return text$
                .debounceTime(100)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : _this.fundDescArray.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); });
        };
        // Date validation/display private variables
        var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var todayDate = new Date();
        var minimumDate = new Date("07/01/2009");
        this.locationArray = [];
        this.fundDescArray = [];
        this.defaultSearchValues = _searchService.getDefaults();
        this.search = _searchService.search;
        this.setDefaultSearchValues = function () {
            this.search = this.defaultSearchValues;
            this.today = monthArray[todayDate.getMonth()] + " " + todayDate.getDate() + ", " + todayDate.getFullYear();
            this.dateWarning = "Dates must be after July 1, 2009 and before " + this.today + ".";
        };
        this.verifyDates = function () {
            var startDate = this.formatDate(new Date(this.search.start)).getTime();
            var endDate = this.formatDate(new Date(this.search.end)).getTime();
            if ((startDate < minimumDate.getTime() || endDate < minimumDate.getTime()) || (startDate > todayDate.getTime() || endDate > todayDate.getTime())) {
                this.invalidDates = true;
                this.dangerDates = false;
                this.dateWarning = "Dates must be after July 1, 2009 and before " + this.today + ".";
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
                        if (fund.fundDesc.toUpperCase() == this.search.filters.fund.toUpperCase()) {
                            this.search.filters.fund = fund.fundSeg;
                        }
                    }
                    this.search.fundType = _memoryService.shortFundType;
                    this.dismiss();
                    _memoryService.search = this.search;
                    _memoryService.save('search', this.search);
                    _router.navigate(["results"]);
                }
            }
        };
        this.getLocations = function () {
            var _this = this;
            _databaseService.getLocations().subscribe(function (response) {
                _this.locationArray = [];
                for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                    var val = response_1[_i];
                    _this.locationArray.push(val.locDesc);
                }
                ;
                _memoryService.locationArray = _this.locationArray;
            }, function (err) { console.error(err); });
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
                this.fundDescArray.push(fund.fundDesc);
            }
        }
    };
    return SearchComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SearchComponent.prototype, "fundArray", void 0);
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search',
        providers: [search_service_1.SearchService],
        styleUrls: ['./css/search.css'],
        templateUrl: './componentTemplates/search.html'
    }),
    __metadata("design:paramtypes", [search_service_1.SearchService, database_service_1.DatabaseService, memory_service_1.MemoryService, router_1.Router])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map