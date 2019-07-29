import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TabsPage } from './tabs/tabs.page';
import { TabsPageModule } from './tabs/tabs.module';
import { TabsPageRoutingModule } from './tabs/tabs.router.module';

import { MaxFindPage } from './max-find/max-find.page';
import { MaxFindPageModule } from './max-find/max-find.module';

import { MaxPercentagesPage} from './max-percentages/max-percentages.page';
import { MaxPercentagesPageModule} from './max-percentages/max-percentages.module';

import {WeightFinderPage} from './weight-finder/weight-finder.page';
import {WeightFinderPageModule} from './weight-finder/weight-finder.module';

import {PersonalRecordsPage} from './personal-records/personal-records.page';
import {PersonalRecordsPageModule} from './personal-records/personal-records.module';
import {PersonalRecordsPageRoutingModule} from './personal-records/personal-records.routing.module';

import {LiftingRecordsPage} from './lifting-records/lifting-records.page';
import {LiftingRecordsPageModule } from './lifting-records/lifting-records.module';

import {CardioRecordsPage} from './cardio-records/cardio-records.page';
import {CardioRecordsPageModule} from './cardio-records/cardio-records.module';

import {NewCardioRecordFormPage} from './new-cardio-record-form/new-cardio-record-form.page';
import {NewCardioRecordFormPageModule} from './new-cardio-record-form/new-cardio-record-form.module'

import {NewLiftingRecordFormPage} from './new-lifting-record-form/new-lifting-record-form.page';
import {NewLiftingRecordFormPageModule} from './new-lifting-record-form/new-lifting-record-form.module';

import {ServicesPage} from './services/services.page';
import {ServicesPageModule} from './services/services.module'
@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    TabsPage,
    MaxFindPage,
    MaxPercentagesPage,
    WeightFinderPage,
    PersonalRecordsPage,
    LiftingRecordsPage,
    NewLiftingRecordFormPage,
    CardioRecordsPage,
    NewCardioRecordFormPage,
    ServicesPage
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    IonicStorageModule.forRoot(),
    ServicesPageModule,
    AppRoutingModule, 
    TabsPageModule,
    TabsPageRoutingModule,
    MaxFindPageModule,
    MaxPercentagesPageModule,
    PersonalRecordsPageModule,
    PersonalRecordsPageRoutingModule,
    LiftingRecordsPageModule,
    NewLiftingRecordFormPageModule,
    CardioRecordsPageModule,
    NewCardioRecordFormPageModule,
    WeightFinderPageModule,
    ReactiveFormsModule,
    FormsModule,
    ],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
