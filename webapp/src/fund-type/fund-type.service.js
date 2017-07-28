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
var FundTypeService = (function () {
    function FundTypeService() {
        this.fundTypes = [
            { full: "Governmental Funds", short: "GOV",
                desc: "These funds are supported by Colorado state equalization, property taxes, state categorical, educational curriculum fees, interest earnings and grant revenues.",
                specifics: [
                    '10 General Fund',
                    '15 Full Day Kindergarten',
                    '21 Capital Reserve Fund',
                    '22 Government Designated Purpose Grant Fund',
                    '25 Transportation Fund',
                    '26 Student Athletic Fund',
                    '27 Choice Scholarship Legal Gift Donation',
                    '29 Mill Levy Override Fund',
                    '43 Capital Projects Fund',
                    '45 Capital Projects COP Related Acct',
                    '53 eDCSD Fund',
                    '63 Insurance Reserve Fund',
                    '64 Medical Self-Insurance Fund',
                ] },
            { full: "Student Activity Funds", short: "STU",
                desc: "These funds are used to account for revenues collected from students for fundraising, donations and fees for special programs, trips and events.",
                specifics: [
                    '71 Expensed Trust Funds',
                    '74 Pupil Activity Agency Fund',
                    '75 Philip S. Miller Trust Fund',
                    '78 Coca Cola Trust Fund',
                ] },
            { full: "Enterprise Funds", short: "ENT",
                desc: "These funds are used to account for operations that are financed and operate in a manner similar to private business, where the intent is that the costs of providing goods or services are recovered through user charges. These funds are self-supporting.",
                specifics: [
                    '51 Nutrition Services Fund',
                    '52 Child Care Services Fund',
                    '54 Outdoor Ed. Center Enterprise Fund',
                    '76 School Facilities Trust Fund',
                ] },
            { full: "Building Funds", short: "BLD",
                desc: "These funds are used to account for the management and actual construction of District facilities that are financed by borrowed proceeds.",
                specifics: [
                    '41 Building Fund',
                    '44 Building Fund: 2006 Bond',
                ] }
        ];
    }
    FundTypeService.prototype.getFundTypes = function () {
        return this.fundTypes;
    };
    return FundTypeService;
}());
FundTypeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], FundTypeService);
exports.FundTypeService = FundTypeService;
//# sourceMappingURL=fund-type.service.js.map