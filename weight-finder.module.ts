import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeightFinderPage } from './weight-finder';

@NgModule({
  declarations: [
    WeightFinderPage,
  ],
  imports: [
    IonicPageModule.forChild(WeightFinderPage),
  ],
})
export class WeightFinderPageModule {}
