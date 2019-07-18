import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WeightFinderPage } from './weight-finder.page';

/*
const routes: Routes = [
  {
    path: '',
    component: WeightFinderPage,
    outlet: 'wf'
  }
];
*/

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: WeightFinderPage}])
  ],
  declarations: [WeightFinderPage]
})
export class WeightFinderPageModule {}
