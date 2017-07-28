import { Component, OnInit, Input } from '@angular/core';
import { ResultsService } from '../results/results.service';
import { MemoryService } from '../app/memory.service';
import { DatabaseService } from '../app/database.service';

import { DatePipe } from '@angular/common';

declare var $:any;

@Component({
   selector: 'result',
   providers: [ResultsService, DatePipe],
   styles: [require('../css/results.css').toString()],
   templateUrl: '../componentTemplates/results.html'
})

export class ResultsComponent {
   componentName: 'ResultsComponent';

   // Default values
   niceColumnNames: Object;
   entriesPerPage: number;
   resultsRows: number;

   @Input() page: number;

   fundType: string;
   search: Object;
   filterString: string;
   data: any;
   sortedData: any;
   dataSplit: any;
   columns: Array<string>;
   niceColumns: Array<string>;
   noResults: boolean;
   isLoading: boolean;
   hasErr: boolean;
   lastSort: String;
   currentSort: String;
   invert: boolean;
   firstGet: boolean;

   // functions
   buildFilterString(): any {};
   getEntryColumnValue(entry: any, column: any): any {};
   onSplitChange(): any {};
   sortBy(): any {};
   convertCSV(): any {};
   sortObjectArray(array: Array<any>, by: String): any {};

   // API interaction
   response: any;
   // API functions
   connect(): any {};
   getData(): any {};
   getAllData(): any {};

   constructor(_memoryService: MemoryService, _databaseService: DatabaseService, _datePipe: DatePipe) {
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

      this.buildFilterString = function() {
         this.filterString = "";
         var usedFilters = 0;
         for(var filter in this.search.filters) {
            if(this.search.filters[filter] != null && this.search.filters[filter] != "") {
               usedFilters++;
               if(usedFilters == 1) {
                  this.filterString += filter+": "+this.search.filters[filter];
               } else {
                  this.filterString += ", "+filter+": "+this.search.filters[filter];
               }
            }
         }
      }

      this.getEntryColumnValue = function(entry:any, column:any) {
         let value = entry[column] || entry[Object.keys(this.niceColumnNames)[Object.keys(this.niceColumnNames).map(key => this.niceColumnNames[key]).indexOf(column)]];
         if(Object.keys(this.niceColumnNames)[this.columns.indexOf(column)].includes("Date") && value != null) {
            let values = value.split('T')[0].split('-');
            value = [1, 2, 0].map(i => +values[i]).join('/');
         }
         if(Object.keys(this.niceColumnNames)[this.columns.indexOf(column)].includes("amount") && value != undefined) {
            value = "$"+value.toFixed(2);
         }
         return value;
      }

      this.getData = function() {
         this.isLoading = true;
         this.search.filters.fund = +this.search.filters.fund || null;
         _databaseService.getData(this.search, this.search.oldData).subscribe(
            (response:any) => {
               this.isLoading = false;
               this.noResults = false;
               this.resultsRows = response.rowsAffected;
               this.data = response.recordset;
               this.sortedData = this.data;
               if(!Array.isArray(this.data)) this.data = [this.data];
               this.dataSplit = this.data.slice((this.page - 1) * this.entriesPerPage, ((this.page - 1) * this.entriesPerPage) + this.entriesPerPage);
               try {
                  this.niceColumns = [];
                  this.columns = Object.keys(this.data[0]);
                  this.columns.forEach((column:any, i:number) => {
                     this.niceColumns[i] = this.niceColumnNames[column];
                  });
               } catch (e) {
                  this.isLoading = false;
                  if(e instanceof TypeError) {
                     this.noResults = true;
                  } else {
                     this.hasErr = true;
                  }
               }
            },
            (err:any) => { console.error(err); this.hasErr = true }
         )
      }
      this.getAllData = function() {
         this.isLoading = true;
         this.noResults = true;
         this.data = [];
         this.sortedData = [];
         this.dataSplit = [];
         _databaseService.getAllData(this.search, this.search.oldData).subscribe(
            (response:any) => {
               console.log(response);
               this.isLoading = false;
               this.noResults = false;
               this.resultsRows = response.rowsAffected;
               this.data = response.recordset;
               this.sortedData = this.data;
               if(!Array.isArray(this.data)) this.data = [this.data];
               this.dataSplit = this.data.slice((this.page - 1) * this.entriesPerPage, ((this.page - 1) * this.entriesPerPage) + this.entriesPerPage);
               try {
                  this.columns = Object.keys(this.data[0]);
                  this.columns.forEach((column:any, i:number) => {
                     this.columns[i] = this.niceColumnNames[column] || this.columns[i];
                  });
               } catch (e) {
                  if(e instanceof TypeError) {
                     this.noResults = true;
                  }
               }
            },
            (err:any) => { console.error(err) }
         )
      }
      this.onSplitChange = function() {
         setTimeout(() => {
            this.dataSplit = this.sortedData.slice((this.page - 1) * this.entriesPerPage, (this.page - 1) * this.entriesPerPage + (+this.entriesPerPage));
         })
      }
      this.convertCSV = function() {
         if(this.resultsRows == 500) {
            _databaseService.getAllData(this.search, this.search.oldData)
               .map((response:any) => response.recordset)
               .subscribe(convert);
         } else {
            convert(this.data);
         }
         function convert(data:any) {
            let csv = Object.keys(data[0]).join(",") + "\r\n" + data.map((entry:any) => {
               return Object.keys(entry).map((k:any) => JSON.stringify(entry[k] || ""))
            }).join('\r\n');
            let csvBlob = new Blob([csv], {type: "txt/csv"});
            let anchor = document.createElement("a");
            anchor.href = URL.createObjectURL(csvBlob);
            anchor.download = `DCSD_FT_${new Date().getTime()}.csv`;
            anchor.click();
         }
      }
      this.sortObjectArray = function(array:Array<Object>, by:String) {
         let column = this.columns[this.niceColumns.indexOf(by)];
         let sortCount = 0;
         this.currentSort = by;
         let mapped = array.map(function(obj:Object) {
            return obj;
         }).sort(function(a:Array<any>, b:Array<any>) {
            // This is an awkward sort function, I know.
            // Please don't make fun of me.
            if(typeof a[column] == "string" && typeof b[column] == "string" && a[column].includes("-") && b[column].includes("-")) {
               let dateA = Date.parse(a[column]);
               let dateB = Date.parse(b[column]);
               if(!isNaN(dateA) && !isNaN(dateB)) {
                  return dateA - dateB;
               }
            }
            if(!isNaN(parseFloat(a[column])) && !isNaN(parseFloat(b[column]))) {
               return a[column] - b[column];
            }
            if(typeof a[column] == "string" && typeof b[column] == "string") {
               return a[column].localeCompare(b[column]);
            }
            return 0;
         });
         if(this.lastSort == column) this.invert = !this.invert;
         if(this.invert) mapped.reverse();
         this.lastSort = column;
         this.sortedData = mapped;
         this.onSplitChange();
      };
   }

   ngOnInit() {
      this.buildFilterString();
      this.getData();
   }
};
