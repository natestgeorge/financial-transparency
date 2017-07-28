import { Injectable } from '@angular/core';
import { DatabaseService } from '../app/database.service';

@Injectable()
export class FundTypeService {
   fundTypes:Array<any>;

   constructor(_databaseService: DatabaseService) {
      this.fundTypes = [   // Fallback values
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
          ]},
         { full: "Enterprise Funds", short: "ENT",
           desc: "These funds are used to account for operations that are financed and operate in a manner similar to private business, where the intent is that the costs of providing goods or services are recovered through user charges. These funds are self-supporting.",
           old: [
             '51 Nutrition Services Fund',
             '52 Child Care Services Fund',
             '54 Outdoor Ed. Center Enterprise Fund',
             '76 School Facilities Trust Fund',
          ]},
         { full: "Building Funds", short: "BLD",
           desc: "These funds are used to account for the management and actual construction of District facilities that are financed by borrowed proceeds.",
           old: [
             '41 Building Fund',
             '44 Building Fund: 2006 Bond',
          ]}
      ];

      _databaseService.getFundCategories().subscribe(
         (response:any) => {
            for(let category in response) {
               this.fundTypes[category].full = response[category].categoryName;
               this.fundTypes[category].short = response[category].categoryId;
               // Once descriptions are added to the database, uncomment this line and adjust as needed
               // this.fundTypes[category].desc = response[category].categoryDesc;
            }
         }
      )

      for(let fund of this.fundTypes) {
         _databaseService.getOldFunds(fund.short).subscribe(
            (response:any) => {
               fund.old = response;
            },
            (err:any) => {
               fund.old = ["Error"];
            }
         )
         _databaseService.getNewFunds(fund.short).subscribe(
            (response:any) => {
               fund.new = response;
            },
            (err:any) => {
               fund.new = ["Error"];
            }
         )
      }
   }

   getFundTypes() {
      return this.fundTypes;
   }
}
