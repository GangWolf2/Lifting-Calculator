import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdateCardioRecordPage } from './update-cardio-record.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateCardioRecordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UpdateCardioRecordPage]
})
export class UpdateCardioRecordPageModule {}
