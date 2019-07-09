import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MaxFindPage } from './max-find.page';

const routes: Routes = [
  {
    path: '',
    component: MaxFindPage,
    outlet: 'orm'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MaxFindPage]
})
export class MaxFindPageModule {}
