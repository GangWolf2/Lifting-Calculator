import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewLiftingRecordFormPage } from './new-lifting-record-form.page';

const routes: Routes = [
  {
    path: '',
    component: NewLiftingRecordFormPage
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
  declarations: [NewLiftingRecordFormPage]
})
export class NewLiftingRecordFormPageModule {}
