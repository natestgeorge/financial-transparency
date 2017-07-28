import { Directive, Component, OnInit, OnChanges, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

// import { SearchService } from '../search/search.service';
import { MemoryService } from '../app/memory.service';
import { DatabaseService } from '../app/database.service';

declare var $:any;

@Component({
   selector: 'search',
   providers: [],
   styles: [require('../css/search.css').toString()],
   templateUrl: '../componentTemplates/search.html'
})

export class SearchComponent {
   componentName: 'SearchComponent';

   search: Object;
   defaultSearchValues: Object;
   invalidDates: boolean;
   dangerDates: boolean;
   hasErr: boolean;
   dateWarning: string;
   todayDate: Date;
   minimumDate: Date;
   splitDate: Date;
   today: string;
   minimum: string;
   split: string;
   locationArray: Array<string>;

   fundPopover: any;
   locationPopover: any;

   @Input() fundArray: Array<any>;
   @Input() redirected: boolean;
   @Input() olderData: any;

   fundDescArray: any;

   // Functions
   setDefaultSearchValues: any;
   getLocations: any;
   verifyDates: any;
   updateStart: any;
   updateEnd: any;
   prepareForRouteChange: any;
   goToSearch: any;
   filterFunds: any;
   filterLocations: any;
   dismiss: any;
   formatDate: any;
   buildWarningString: any;
   setOlderDataValues: any;

   constructor( _databaseService: DatabaseService, private _memoryService: MemoryService, _router: Router) {
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
      }
      this.defaultSearchValues["start"] = this.olderData ? this.minimumDate.toISOString().substr(0,10) : this.splitDate.toISOString().substr(0,10);
      this.defaultSearchValues["end"] = this.olderData ? this.splitDate.toISOString().substr(0,10) : new Date().toISOString().substr(0,10);

      this.buildWarningString = function(bottomLimit:string, topLimit:string) {
         return `Dates must be after <strong class="px-1 no-animate">${bottomLimit}</strong> and before <strong class="pl-1 no-animate">${topLimit}</strong>.`
      }

      this.setDefaultSearchValues = function() {
         this.search = this.defaultSearchValues;
         this.today = dateFormat(this.todayDate);
         this.split = dateFormat(this.splitDate);
         this.minimum = dateFormat(this.minimumDate);

         this.dateWarning = this.buildWarningString(this.minimum, this.today);

         function dateFormat(date:Date) {
            return monthArray[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear();
         }
      }
      this.verifyDates = function() {
         var startDate = this.formatDate(new Date(this.search.start)).getTime();
         var endDate = this.formatDate(new Date(this.search.end)).getTime();
         if((startDate < this.minimumDate.getTime() || endDate < this.minimumDate.getTime()) || (startDate > this.todayDate.getTime() || endDate > this.todayDate.getTime())) {
            this.invalidDates = true;
            this.dangerDates = false;
            this.dateWarning = this.olderData ? this.buildWarningString(this.minimum, this.split) : this.buildWarningString(this.split, this.today);
         } else {
            if((this.olderData && endDate > this.splitDate.getTime()) ||(!this.olderData && startDate < this.splitDate.getTime())) {
               this.invalidDates = true;
               this.dangerDates = false;
               this.dateWarning = this.olderData ? this.buildWarningString(this.minimum, this.split) : this.buildWarningString(this.split, this.today);
            } else {
               if(startDate < endDate) {
                  this.invalidDates = false;
                  this.dangerDates = false;
               } else {
                  this.dateWarning = "Start date must be before end date.";
                  this.invalidDates = true;
                  this.dangerDates = false;
               }
            }
         }
      }
      this.updateStart = function(event:Date) {
         this.search.start = event;
         this.verifyDates();
      }
      this.updateEnd = function(event:Date) {
         this.search.end = event;
         this.verifyDates();
      }

      this.goToSearch = function(event:any) {
         if(!event || (event && event.keyCode == 13)) {
            if(this.invalidDates) {
               this.dangerDates = true;
            } else {
               for(let fund of this.fundArray) {
                  if(fund.fundName.toUpperCase() == this.search.filters.fund.toUpperCase()) {
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
      }

      this.getLocations = function() {
         _databaseService.getLocations(this.olderData).subscribe(
            (response:any) => {
               this.locationArray = [];
               for(let val of response) {
                  this.locationArray.push(val.costCenterName);
               };
               _memoryService.locationArray = this.locationArray;
            },
            (err:any) => { this.hasErr = true }
         )
      }

      this.dismiss = function() {
         _memoryService.dismissModal();
      }

      this.formatDate = function(date:Date) {
         return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
      }

      this.setOlderDataValues = function(e:any) {
         this.olderData = e;
         this.search.start = this.olderData ? this.minimumDate.toISOString().substr(0,10) : this.splitDate.toISOString().substr(0,10);
         this.search.end = this.olderData ? this.splitDate.toISOString().substr(0,10) : new Date().toISOString().substr(0,10);
         this.dateWarning = this.olderData ? this.buildWarningString(this.minimum, this.split) : this.buildWarningString(this.split, this.today);
      }
   }


   // ngbTypeahead functions from ng-bootstrap docs
   formatter = (result:string) => result.toLowerCase().replace(/(^\w|\W\w)/g, (selected:string) => selected.toUpperCase());

   searchLocations = (text$: Observable<string>) =>
      text$
         .debounceTime(100)
         .distinctUntilChanged()
         .map(term => term.length < 2 ? []
           : this.locationArray.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 6));

   searchFunds = (text$: Observable<string>) =>
        text$
           .debounceTime(100)
           .distinctUntilChanged()
           .map(term => term.length < 2 ? []
             : this.fundDescArray.filter((v:string) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 6));

   ngOnInit() {
      this.setDefaultSearchValues();
      this.getLocations();
   }

   ngOnChanges(changes:any) { // This runs on load of the search modal
      if(!changes.fundArray.firstChange) {
         this.fundDescArray = [];
         for(let fund of this.fundArray) {
            this.fundDescArray.push(fund.fundName);
         }
         this.dateWarning = this.olderData ? this.buildWarningString(this.minimum, this.split) : this.buildWarningString(this.split, this.today);
      }
      if(this.fundArray == ["err"]) {
         this.hasErr = true;
      } else {
         this.hasErr = false;
      }
      this.defaultSearchValues["start"] = this.olderData ? this.minimumDate.toISOString().substr(0,10) : this.splitDate.toISOString().substr(0,10);
      this.defaultSearchValues["end"] = this.olderData ? this.splitDate.toISOString().substr(0,10) : new Date().toISOString().substr(0,10);
   }
}
