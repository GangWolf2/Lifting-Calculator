import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: '../max-find/max-find.module#MaxFindPageModule'
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: '../weight-finder/weight-finder.module#WeightFinderPageModule'
                    }
                ]
            },
            {
                path: 'tab2/:id',
                children:[
                    {
                        path: '',
                        loadChildren: '../weight-finder-results/weight-finder-results.module#WeightFinderResultsPageModule'
                    }
                ]

            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: '../max-percentages/max-percentages.module#MaxPercentagesPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/tab2',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tabs/tab2',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TabsPageRoutingModule{}