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
var fund_type_service_1 = require("../fund-type/fund-type.service");
var memory_service_1 = require("../app/memory.service");
var database_service_1 = require("../app/database.service");
var FundTypeComponent = (function () {
    function FundTypeComponent(_fundTypeService, _databaseService, _memoryService) {
        this._memoryService = _memoryService;
        this.fundTypes = _fundTypeService.getFundTypes();
        this.searchClickCount = 0;
        this.updateSelected = function (type, event) {
            event.stopPropagation();
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
            _databaseService.getFunds(_memoryService.shortFundType).subscribe(function (response) {
                _this.fundArray = response;
                _memoryService.fundArray = _this.fundArray;
            }, function (err) { console.error(err); });
        };
    }
    FundTypeComponent.prototype.open = function (content) {
        this._memoryService.openModal(content);
    };
    return FundTypeComponent;
}());
FundTypeComponent = __decorate([
    core_1.Component({
        selector: 'fund-type-selector',
        providers: [fund_type_service_1.FundTypeService],
        styleUrls: ['./css/fund-type-selector.css'],
        templateUrl: './componentTemplates/fund-type-selector.html'
    }),
    __metadata("design:paramtypes", [fund_type_service_1.FundTypeService, database_service_1.DatabaseService, memory_service_1.MemoryService])
], FundTypeComponent);
exports.FundTypeComponent = FundTypeComponent;
//# sourceMappingURL=fund-type-selection.component.js.map