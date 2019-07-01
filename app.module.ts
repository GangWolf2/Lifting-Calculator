import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MaxFindPage } from '../pages/max-find/max-find';
import { MaxFindPageModule } from '../pages/max-find/max-find.module';
import { MaxPercentagesPage } from '../pages/max-percentages/max-percentages';
import { MaxPercentagesPageModule } from '../pages/max-percentages/max-percentages.module';
import { ResultsPage } from '../pages/results/results';
import { WeightFinderPage } from '../pages/weight-finder/weight-finder';
import { WeightFinderPageModule} from '../pages/weight-finder/weight-finder.module';
import { TabsPage } from '../pages/tabs/tabs';
import { TabsPageModule } from '../pages/tabs/tabs.module';

@NgModule({
  declarations: [
    MyApp,
    ResultsPage,
    
  ],
  imports: [
    //WR: Importing the page modules is what gives tabs functionality
    //WR: If creating a new tab, must import page module to avoid: "Type... is part of 2 modules" declaration error
    //WR: Could I tell you why, no cause I have no idea either
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MaxFindPageModule,
    MaxPercentagesPageModule,
    WeightFinderPageModule,
    TabsPageModule
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MaxFindPage,
    MaxPercentagesPage,
    ResultsPage,
    WeightFinderPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
