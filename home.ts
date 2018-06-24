import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { MaxFindPage} from '../max-find/max-find';
import { MaxPercentagesPage} from '../max-percentages/max-percentages';
import { ResultsPage } from '../results/results';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage { 

  constructor(public navCtrl: NavController) {

  }

  loadMaxFindPage(){
    this.navCtrl.push(MaxFindPage);
  }
  
  loadMaxPercentagesPage(){
    this.navCtrl.push(MaxPercentagesPage);
  }

  loadResultsPage(){
    this.navCtrl.push(ResultsPage);
  }
      
}





