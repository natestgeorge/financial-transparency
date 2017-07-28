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
// and permanance.
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var core_1 = require("@angular/core");
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
        this.modalRef.dismiss();
    };
    return MemoryService;
}());
MemoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
], MemoryService);
exports.MemoryService = MemoryService;
//# sourceMappingURL=memory.service.js.map