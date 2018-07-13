import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultsPage } from '../results/results';
/**
 * Generated class for the WeightFinderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weight-finder',
  templateUrl: 'weight-finder.html',
})


var userWeight; 
var barSelected;
var fortyfive, thirtyfive, twentyfive, ten, five, two_five;

export class WeightFinderPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  setUserWeight(weight){
    userWeight = weight;
  }

  setBarType(bar){
    barSelected = bar;
  }

  setPlates(fourfive, threefive, twofive, t3n, fiv3, two5){

  }

  loadResultsPage(){
    this.navCtrl.push(ResultsPage);

  }

}
