import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdateLiftingRecordPage } from './update-lifting-record.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateLiftingRecordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UpdateLiftingRecordPage]
})
export class UpdateLiftingRecordPageModule {}
