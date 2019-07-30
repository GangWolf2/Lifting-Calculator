import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MaxFindPage } from './max-find.page';

/*
const routes: Routes = [
  {
    path: '',
    component: MaxFindPage,
    outlet: 'orm'
  }
];
*/

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: MaxFindPage}])
  ],
  declarations: [MaxFindPage]
})
export class MaxFindPageModule {}
