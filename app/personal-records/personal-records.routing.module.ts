import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalRecordsPage } from './personal-records.page';

const routes: Routes = [
    {
        path: 'personal-records',
        component: PersonalRecordsPage,
        children: [
            {
                path: 'lifting-records',
                loadChildren: '../lifting-records/lifting-records.module#LiftingRecordsPageModule'
            },
            {
                path: 'cardio-records',
                loadChildren: '../cardio-records/cardio-records.module#CardioRecordsPageModule'
            },
            {
                path: ' ',
                redirectTo: '/personal-records/lifting-records',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: ' ',
        redirectTo: '/personal-records/personal-records/lifting-records',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PersonalRecordsPageRoutingModule{}