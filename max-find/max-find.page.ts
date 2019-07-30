import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MaxPercentagesPage } from '../max-percentages/max-percentages.page';
import { WeightFinderPage } from '../weight-finder/weight-finder.page';
import { NavController} from '@ionic/angular';




@Component({
  selector: 'app-max-find',
  template: '<input> #enteredWeight (input) > <p>{{enteredWeight.value}}</p>',
  templateUrl: './max-find.page.html',
  styleUrls: ['./max-find.page.scss'],
})
export class MaxFindPage implements OnInit {
  
  userWeight: number = 0; //not actually being assigned anything
  reps: number = 0;//not actually being assigned anything
  maxPercentages: number[] = [0,1,1.05,1.08,1.11,1.15,1.18,1.2,1.25,1.3,1.33,1.36,1.42];

  oneRepMax: number = 0;

  constructor(public navCtrl: NavController) {}

  ngOnInit() { //basically ionViewDidLoad
   
  }

  getOneRepMax(enteredWeight: number, numReps: number){
    this.userWeight = enteredWeight;
    this.reps = numReps;

    this.oneRepMax = Math.ceil(this.userWeight * this.maxPercentages[this.reps]);
    console.log("User Weight set to: " + this.userWeight + " Number of reps set to: " + this.reps
                + " OneRepMax set to: " + this.oneRepMax);
  }

  loadPercentageResultsPage(){ //use this style for any new navigation with parameters 7/9/2019
    this.navCtrl.navigateForward(['/max-percentages',{ 
          oneRepMax: this.oneRepMax}]);
  }

  loadWeightFinderPage(){
    this.navCtrl.navigateForward(['./weight-finder', {
        userWeight: this.userWeight
    }]);
  }



}
