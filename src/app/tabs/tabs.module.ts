import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'max-find',
        loadChildren: '../max-find/max-find.module#MaxFindPageModule'
      },
      {
        path: 'weight-find',
        //outlet: 'wf',
        loadChildren: '../weight-finder/weight-finder.module#WeightFinderPageModule'
      },
      {
        path: 'max-percentage',
        //outlet: 'mp',
        loadChildren:'../max-percentages/max-percentages.module#MaxPercentagesPageModule'
      }
    ]
  },
  {
      path: '',
      redirectTo: '/tabs/weight-find',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  //exports: [RouterModule],
  declarations: [TabsPage]
})
export class TabsPageModule {}
