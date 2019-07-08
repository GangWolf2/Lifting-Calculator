import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaxPercentagesResultsPage } from './maxpercentages-results';

@ngModule({
    declartions: [
        MaxPercentagesResultsPage,
    ],
    imports: [
        ionicPageModule.forChild(MaxPercentagesResultsPage),
    ],
})
export class MaxPercentagesResultsPage {}