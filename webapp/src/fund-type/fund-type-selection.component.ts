import { Component, Input, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FundTypeService } from '../fund-type/fund-type.service';
import { MemoryService } from '../app/memory.service';
import { DatabaseService } from '../app/database.service';

declare var $:any;

@Component({
   selector: 'fund-type-selector',
   providers: [FundTypeService],
   styles: [require('../css/fund-type-selector.css').toString()],
   templateUrl: '../componentTemplates/fund-type-selector.html'
})

export class FundTypeComponent {
   componentName: 'FundTypeComponent';
   fundTypes: Array<Object>;
   selected: string;
   shortSelected: string;
   content: string;
   fundArray: Array<string>;
   searchClickCount: number;
   searchModal: any;
   redirected: boolean;

   showOlderData: boolean;

   @ViewChild('searchModal') searchModalRef: TemplateRef<any>;

   updateSelected: any;
   getFunds: any;
   updateContent: any;

   constructor(_fundTypeService: FundTypeService, _databaseService: DatabaseService, private _memoryService: MemoryService, private _activatedRoute: ActivatedRoute) {
      this.fundTypes = _fundTypeService.getFundTypes();
      this.searchClickCount = 0;

      this.redirected = false;

      this.content = "former Castle View student";

      let contentIndex = 0;

      this.updateSelected = function(type:any, event?:any) {
         if(event) {
            event.stopPropagation();
         }
         this.selected = type.full;
         this.shortSelected = type.short;
         _memoryService.updateFundType(this.selected, this.shortSelected);
         this.getFunds();
      }
      this.getFunds = function() {
         this.searchClickCount++;
         if(this.searchClickCount == 14) {
            console.log("party");
            $("body").addClass("rainbow");
         }
         if(this.showOlderData) {
            _databaseService.getOldFunds(_memoryService.shortFundType).subscribe(
               (response:any) => {
                  this.fundArray = response;
                  _memoryService.fundArray = this.fundArray;
               },
               (err:any) => {
                  this.fundArray = ["Error"];
               }
            )
         } else {
            _databaseService.getNewFunds(_memoryService.shortFundType).subscribe(
               (response:any) => {
                  this.fundArray = response;
                  _memoryService.fundArray = this.fundArray;
               },
               (err:any) => {
                  this.fundArray = ["Error"];
               }
            )
         }
      }
      this.updateContent = function() {   // Very important utility function
         let possibilities = [
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
      }
   }

   open(content:any) {
      this._memoryService.openModal(content);
   }

   ngOnInit() {
      this._activatedRoute.queryParams.subscribe((params: Params) => {
        let searchOpen = params['search'];
        if(searchOpen) {
           this.redirected = true;
           this._memoryService.dismissModal();
           let selectedType;
           for(let type of this.fundTypes) {
             if(type["short"] == searchOpen) {
                selectedType = type;
             }
           }
           selectedType = selectedType || this.fundTypes[0];
           this.updateSelected(selectedType);
           this._memoryService.openModal(this.searchModalRef);
        }
      });
   }
}
