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
var results_service_1 = require("../results/results.service");
var memory_service_1 = require("../app/memory.service");
var database_service_1 = require("../app/database.service");
var common_1 = require("@angular/common");
var ResultsComponent = (function () {
    function ResultsComponent(_memoryService, _databaseService, _datePipe) {
        this.entriesPerPage = 50;
        this.resultsRows = 0;
        this.data = [];
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
            "sourceObjDesc": "Source/Object Description"
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
            var value = entry[Object.keys(this.niceColumnNames)[this.columns.indexOf(column)]];
            if (Object.keys(this.niceColumnNames)[this.columns.indexOf(column)].includes("Date")) {
                var values_1 = value.split('T')[0].split('-');
                value = [1, 2, 0].map(function (i) { return +values_1[i]; }).join('/'); // ~ Ryan Vandersmith 2017
            }
            if (Object.keys(this.niceColumnNames)[this.columns.indexOf(column)].includes("amount")) {
                value = "$" + value.toFixed(2);
            }
            return value;
        };
        this.getData = function () {
            var _this = this;
            this.isLoading = true;
            _databaseService.getData(this.search).subscribe(function (response) {
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
                    if (e instanceof TypeError) {
                        console.log(e);
                        _this.noResults = true;
                    }
                }
            }, function (err) { console.error(err); });
        };
        this.getAllData = function () {
            var _this = this;
            this.isLoading = true;
            this.noResults = true;
            this.data = [];
            this.sortedData = [];
            this.dataSplit = [];
            _databaseService.getAllData(this.search).subscribe(function (response) {
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
                        _this.columns[i] = _this.niceColumnNames[column];
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
            var csv = "data:text/csv;charset=utf-8, ";
            var line;
            for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
                var entry = _a[_i];
                line = '';
                for (var point in entry) {
                    if (line != '')
                        line += ', ';
                    line += entry[point];
                }
                csv += line + '\r\n';
            }
            window.open(encodeURI(csv));
        };
        this.sortObjectArray = function (array, by) {
            var column = this.columns[this.niceColumns.indexOf(by)];
            var sortCount = 0;
            this.currentSort = by;
            var mapped = array.map(function (obj) {
                return obj;
            }).sort(function (a, b) {
                if (!isNaN(parseFloat(a[column])) && !isNaN(parseFloat(b[column]))) {
                    return a[column] - b[column];
                }
                var dateA = Date.parse(a[column]);
                var dateB = Date.parse(b[column]);
                if (!isNaN(dateA) && !isNaN(dateB)) {
                    return dateA - dateB;
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
    ResultsComponent.prototype.sortObjectArray = function (array, by, invert) { };
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
        styleUrls: ['./css/results.css'],
        templateUrl: './componentTemplates/results.html'
    }),
    __metadata("design:paramtypes", [memory_service_1.MemoryService, database_service_1.DatabaseService, common_1.DatePipe])
], ResultsComponent);
exports.ResultsComponent = ResultsComponent;
;
//# sourceMappingURL=results.component.js.map