import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', redirectTo: 'tabs', pathMatch: 'full' },
    { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule'},
    //{ path: 'max-find', loadChildren: './max-find/max-find.module#MaxFindPageModule' },
    { path: 'max-percentages', loadChildren: './max-percentages/max-percentages.module#MaxPercentagesPageModule' },
    { path: 'maxpercentages-results', loadChildren: './maxpercentages-results/maxpercentages-results.module#MaxpercentagesResultsPageModule' },
    { path: 'weight-finder-results', loadChildren: './weight-finder-results/weight-finder-results.module#WeightFinderResultsPageModule' },
 // { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'weight-finder', loadChildren: './weight-finder/weight-finder.module#WeightFinderPageModule' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
