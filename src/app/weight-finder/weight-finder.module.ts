import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WeightFinderPage } from './weight-finder.page';

const routes: Routes = [
  {
    path: '',
    component: WeightFinderPage,
    outlet: 'wf'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [WeightFinderPage]
})
export class WeightFinderPageModule {}
