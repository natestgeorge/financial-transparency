import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app/app.component';
import { FundTypeComponent } from '../fund-type/fund-type-selection.component';
import { ResultsComponent } from '../results/results.component';

export const SearchRoutes:Routes = [
   { path: '', component: FundTypeComponent },
   { path: 'results', component: ResultsComponent },
   { path: '**', component: FundTypeComponent }
];
