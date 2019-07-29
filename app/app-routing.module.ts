import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule'},
  { path: 'max-find', loadChildren: './max-find/max-find.module#MaxFindPageModule' },
  { path: 'max-percentages', loadChildren: './max-percentages/max-percentages.module#MaxPercentagesPageModule' },
  { path: 'weight-finder-results', loadChildren: './weight-finder-results/weight-finder-results.module#WeightFinderResultsPageModule' },
 // { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'weight-finder', loadChildren: './weight-finder/weight-finder.module#WeightFinderPageModule' },
  { path: 'personal-records', loadChildren: './personal-records/personal-records.module#PersonalRecordsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'lifting-records', loadChildren: './lifting-records/lifting-records.module#LiftingRecordsPageModule' },
  { path: 'cardio-records', loadChildren: './cardio-records/cardio-records.module#CardioRecordsPageModule' },
  { path: 'new-cardio-record-form', loadChildren: './new-cardio-record-form/new-cardio-record-form.module#NewCardioRecordFormPageModule' },
  { path: 'new-lifting-record-form', loadChildren: './new-lifting-record-form/new-lifting-record-form.module#NewLiftingRecordFormPageModule' },
  { path: 'services', loadChildren: './services/services.module#ServicesPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
