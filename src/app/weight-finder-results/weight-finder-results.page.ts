import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-weight-finder-results',
  templateUrl: './weight-finder-results.page.html',
  styleUrls: ['./weight-finder-results.page.scss'],
})
export class WeightFinderResultsPage implements OnInit {
  userWeight: number;
  barWeight: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) { 
    this.userWeight = this.navParams.get("userWeight");
    this.barWeight = this.navParams.get("bar");
  }

  ngOnInit() {
  }

  totalWeight: number = this.userWeight - this.barWeight;

  weight = [
    {load: 45, amount: this.get45(this.totalWeight)},
    {load: 35, amount: this.get35(this.totalWeight)},
    {load: 25, amount: this.get25(this.totalWeight)}, 
    {load: 10, amount: this.get10(this.totalWeight)},
    {load: 5,  amount: this.get5(this.totalWeight)},
    {load: 2.5,amount: this.get2p5(this.totalWeight)}
  ];

  get45(totalWeight: number){
    var plate = 45;
    if(totalWeight < plate || totalWeight == 0){
      total = 0; //this is where error would occur, change to var total and erase other var
    }
    else{
      var total = Math.abs(totalWeight / plate);
      while(total%2 != 0){
        total -= 1;
      }
      this.totalWeight -= (45*total);
      return total;
    }
  }

  get35(totalWeight: number){
    var plate = 35;
    if(totalWeight < plate || totalWeight == 0){
      total = 0;
    }
    else{
      var total = Math.abs(totalWeight / plate);
      while(total%2 != 0){
        total -= 1;
      }
      this.totalWeight -= (35*total);
      return total;
    }
  }

  get25(totalWeight: number){
    var plate = 25;
    if(totalWeight < plate || totalWeight == 0){
      total = 0;
    }
    else{
      var total = Math.abs(totalWeight / plate);
      while(total%2 != 0){
        total -= 1;
      }
      this.totalWeight -= (25*total);
      return total;
    }
  }

  get10(totalWeight: number){
    var plate = 10;
    if(totalWeight < plate || totalWeight == 0){
      total = 0;
    }
    else{
      var total = Math.abs(totalWeight / plate);
      while(total%2 != 0){
        total -= 1;
      }
      this.totalWeight -= (10*total);
      return total;
    }
  }

  get5(totalWeight: number){
    var plate = 5;
    if(totalWeight < plate || totalWeight == 0){
      total = 0;
    }
    else{
      var total = Math.abs(totalWeight / plate);
      while(total%2 != 0){
        total -= 1;
      }
      this.totalWeight -= (5*total);
      return total;
    }
  }

  get2p5(totalWeight: number){
    var plate = 2.5;
    if(totalWeight < plate || totalWeight == 0){
      total = 0;
    }
    else{
      var total = Math.abs(totalWeight / plate);
      while(total%2 != 0){
        total -= 1;
      }
      this.totalWeight -= (2.5*total);
      return total;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

  
  loadWeightFinderPage(){
    this.navCtrl.navigateBack('./weight-finder');
  }

}



