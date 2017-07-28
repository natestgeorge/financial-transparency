import { Component} from '@angular/core';
import { MemoryService } from '../app/memory.service';
import { DatabaseService } from '../app/database.service';

@Component({
   selector: 'app',
   providers: [MemoryService, DatabaseService],
   templateUrl: '../componentTemplates/app.html',
   styles: [require('css/main.css').toString()]
})
export class AppComponent {
   componentName: 'AppComponent'

   getLocations(): any {};

   constructor(_memoryService: MemoryService, _databaseService: DatabaseService) {
      require('../polyfill/objectkeys.js');
      require('./util.js');
   }
}
