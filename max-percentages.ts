import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MaxPercentagesResultsPage } from '../maxpercentages-results/maxpercentages-results';

/**
 * Generated class for the MaxPercentagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-max-percentages',
  templateUrl: 'max-percentages.html',
})
export class MaxPercentagesPage {

  oneRepMax: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaxPercentagesPage');
  }

  loadPercentageResultsPage(){
    this.navCtrl.push(MaxPercentagesResultsPage,{
        oneRepMax: this.oneRepMax
    });
  }

}
