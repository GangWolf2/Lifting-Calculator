import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LiftingRecordsPage } from './lifting-records.page';

const routes: Routes = [
  {
    path: '',
    component: LiftingRecordsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LiftingRecordsPage]
})
export class LiftingRecordsPageModule {}
