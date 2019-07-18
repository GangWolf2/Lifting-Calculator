import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { MaxPercentagesPage } from './max-percentages.page';

/*
const routes: Routes = [
  {
    path: '',
    component: MaxPercentagesPage
  }
];
*/
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: MaxPercentagesPage }])
  ],
  declarations: [MaxPercentagesPage]
})
export class MaxPercentagesPageModule {}
