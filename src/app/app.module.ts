import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TabsPage } from './tabs/tabs.page';
import { TabsPageModule } from './tabs/tabs.module';

import { MaxFindPage } from './max-find/max-find.page';
import { MaxFindPageModule } from './max-find/max-find.module';

import { MaxPercentagesPage} from './max-percentages/max-percentages.page';
import { MaxPercentagesPageModule} from './max-percentages/max-percentages.module';

import {MaxpercentagesResultsPage} from './maxpercentages-results/maxpercentages-results.page';
import {MaxpercentagesResultsPageModule} from './maxpercentages-results/maxpercentages-results.module';

import {WeightFinderPage} from './weight-finder/weight-finder.page';
import {WeightFinderPageModule} from './weight-finder/weight-finder.module';

import {WeightFinderResultsPage} from './weight-finder-results/weight-finder-results.page';
import {WeightFinderResultsPageModule} from './weight-finder-results/weight-finder-results.module';

import {SettingsPage} from './settings/settings.page';
import {SettingsPageModule} from './settings/settings.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    TabsPage,
    MaxFindPage,
    MaxPercentagesPage,
    MaxpercentagesResultsPage,
    WeightFinderPage,
    WeightFinderResultsPage,
    SettingsPage
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    TabsPageModule,
    MaxFindPageModule,
    MaxPercentagesPageModule,
    MaxpercentagesResultsPageModule,
    WeightFinderPageModule,
    WeightFinderResultsPageModule,
    SettingsPageModule],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
