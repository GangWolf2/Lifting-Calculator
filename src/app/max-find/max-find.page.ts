import { Component, OnInit } from '@angular/core';
import { MaxPercentagesPage } from '../max-percentages/max-percentages.page';
import { WeightFinderPage } from '../weight-finder/weight-finder.page';
import { NavController} from '@ionic/angular';



@Component({
  selector: 'app-max-find',
  templateUrl: './max-find.page.html',
  styleUrls: ['./max-find.page.scss'],
})
export class MaxFindPage implements OnInit {

  userWeight: number;
  reps: number;
  oneRepMax: number;

  maxPercentages: number[] = [0,1,1.05,1.08,1.11,1.15,1.18,1.2,1.25,1.3,1.33,1.36,1.42];

  constructor(public navCtrl: NavController) {}

  ngOnInit() { //basically ionViewDidLoad
    
  }

  calculateMax(enteredWeight, numReps){
    this.userWeight = enteredWeight;
    this.reps = numReps;

    this.oneRepMax = this.userWeight * this.maxPercentages[this.reps];
    //changeDisplay();
    return this.oneRepMax;
  }

  changeDisplay(){
    var x = document.getElementById("results");
    if (x.style.display == "none"){
      x.style.display = "block";
    }
     else{x.style.display == "none"}

    var y = document.getElementById("btnList");
    if (y.style.display == "none" || y.style.display == "block"){
      y.style.display = "inline"; 
    }
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
