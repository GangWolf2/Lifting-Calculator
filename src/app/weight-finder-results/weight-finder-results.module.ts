import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WeightFinderResultsPage } from './weight-finder-results.page';

const routes: Routes = [
  {
    path: '',
    component: WeightFinderResultsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WeightFinderResultsPage]
})
export class WeightFinderResultsPageModule {}
