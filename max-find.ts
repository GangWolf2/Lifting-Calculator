import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MaxPercentagesResultsPage } from '../maxpercentages-results/maxpercentages-results';
import { WeightFinderPage } from './weight-finder';

/**
 * Generated class for the MaxFindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-max-find',
  templateUrl: 'max-find.html',
})
export class MaxFindPage {

  userWeight: number;
  reps: number;
  oneRepMax: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  maxPercentages: number[] = [0,1,1.05,1.08,1.11,1.15,1.18,1.2,1.25,1.3,1.33,1.36,1.42];

  calculateMax(enteredWeight, numReps){
    this.userWeight = enteredWeight;
    this.reps = numReps;

    this.oneRepMax = this.userWeight * this.maxPercentages[this.reps];

    return this.oneRepMax;
  }

  changeDisplay(){
   //var x = document.getElementbyId("results");
    //if (x.style.display == "none"){
      //x.style.display = block }
    //else{x.style.display == "none"}
    
    //var y = document.getElementbyId("btnList");
    //if (y.style.display == "none" || y.style.display == "block"){
    // y.style.display == "inline"; }
  }

  loadPercentageResultsPage(){
    this.navCtrl.push(MaxPercentagesResultsPage,{
        oneRepMax: this.oneRepMax
    });
  }

  loadWeightFinderPage(){
    this.navCtrl.push(WeightFinderPage,{
        userWeight: this.userWeight
    });
  }
  /*
  loadMaxFindResults(){
    this.navCtrl.push(MaxFindResultsPage, {
      weight: this.userWeight,
      reps: this.reps
    });
  }
  */
  ionViewDidLoad() {
    console.log('ionViewDidLoad MaxFindPage');
  }

 
  
}
