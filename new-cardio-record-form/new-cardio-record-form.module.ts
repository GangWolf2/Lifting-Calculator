import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewCardioRecordFormPage } from './new-cardio-record-form.page';

const routes: Routes = [
  {
    path: '',
    component: NewCardioRecordFormPage
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
  declarations: [NewCardioRecordFormPage]
})
export class NewCardioRecordFormPageModule {}
