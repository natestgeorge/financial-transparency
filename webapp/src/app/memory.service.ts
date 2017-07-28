// This file 'saves' important information for searching,
// so that there aren't many services being initialized in AppComponent.
// LocalStorage is used on some variables in addition to MemoryService for consistency
// and permanence.
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Injectable } from '@angular/core';

@Injectable()
export class MemoryService {
   // Variables
   fundType: string;
   shortFundType: string;
   fundArray: Array<string>;
   locationArray: Array<string>;
   search: Object;
   activate: boolean;
   modalRef: any;

   // Functions
   updateFundType(value:string, short:string): void {
      this.fundType = value;
      this.shortFundType = short;
      this.save('fundType', this.fundType);
      this.save('shortFundType', this.shortFundType);
   };

   // Save/load functions not strictly necessary, however they reduce annoying bits of code.
   save(saveAs:string, value:any): void {
      if(typeof value === "object" || Array.isArray(value)) {
         localStorage.setItem(saveAs, JSON.stringify(value));
      } else {
         localStorage.setItem(saveAs, value);
      }
   };

   load(name:string): any {
      let localStorageValue = localStorage.getItem(name);
      let isJSON = true;
      try { JSON.parse(localStorageValue) } catch(e) { isJSON = false };
      if(isJSON) {
         localStorageValue = JSON.parse(localStorageValue);
      }
      return localStorageValue;
   };

   openModal(content:any) {
      this.modalRef = this._modalService.open(content);
   }
   dismissModal() {
      if(this.modalRef) {
         this.modalRef.dismiss();
      }
   }

   constructor(private _modalService: NgbModal) {
      // If universal default values are needed, create them here
   }
}
