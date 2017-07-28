import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { FundTypeComponent } from '../fund-type/fund-type-selection.component';
import { ResultsComponent } from '../results/results.component';

import { SearchComponent } from '../search/search.component';
import { SearchRoutes } from '../search/search.routes';

interface Route {
   path?: string;
   component?: string;
}

@NgModule({
   imports: [
      RouterModule.forRoot(SearchRoutes, { useHash: true }),
      NgbModule.forRoot(),
      CommonModule,
      BrowserModule,
      FormsModule,
      HttpModule
   ],
   declarations: [ AppComponent, FundTypeComponent, SearchComponent, ResultsComponent],
   bootstrap: [ AppComponent ]
})

export class AppModule { }
