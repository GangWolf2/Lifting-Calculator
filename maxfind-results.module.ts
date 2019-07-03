import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaxFindResultsPage } from '../maxfind-results/maxfind-results';

@ngModule({
    declartions: [
        MaxFindResultsPage,
    ],
    imports: [
        ionicPageModule.forChild(MaxFindResultsPage),
    ],
})
export class MaxFindResultsPage {}