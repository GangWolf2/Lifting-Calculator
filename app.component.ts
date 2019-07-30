import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TabsPage } from './tabs/tabs.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent { 

  navigate = [
    {
      title: "Lifting",
      icon: "fitness",
      children: [
        {
          title: "One Rep Max",
          url: "/tabs/tab1",
          icon: "stats"
        },
        {
          title: "Bar Loader",
          url: "/tabs/tab2",
          icon: "calculator"
        },
        {
          title: "Percentages",
          url: "/tabs/tab3",
          icon: "clipboard"
        }
      ]
    },
    {
      title: "Personal Records",
      icon: "bookmarks",
      children: [
        {
          title: "Lifting Records",
          url: "/personal-records/lifting-records",
          icon: "body"
        },
        {
          title: "Cardio Records",
          url: "/personal-records/cardio-records",
          icon: "walk"
        }
      ]
    }
  ]

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  
}
