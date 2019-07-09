import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MaxpercentagesResultsPage } from './maxpercentages-results.page';

const routes: Routes = [
  {
    path: '',
    component: MaxpercentagesResultsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MaxpercentagesResultsPage]
})
export class MaxpercentagesResultsPageModule {}
