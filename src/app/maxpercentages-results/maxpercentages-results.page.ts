import { Component, OnInit } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';
@Component({
  selector: 'app-maxpercentages-results',
  templateUrl: './maxpercentages-results.page.html',
  styleUrls: ['./maxpercentages-results.page.scss'],
})
export class MaxpercentagesResultsPage implements OnInit {
  oneRepMax: number;
  rounded: number;
  roundUp: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) { 
    this.oneRepMax = this.navParams.get("oneRepMax");
    this.roundUp = this.navParams.get("rounding"); //will most likely need to create a Storage, static variable not resetting when closing app
  }

  
  ngOnInit() {
  }

  percentages = [
    {value: 100,multiplier: Math.abs(this.oneRepMax * 1)},
    {value: 95, multiplier: Math.abs(this.oneRepMax * 0.95)},
    {value: 90, multiplier: Math.abs(this.oneRepMax * 0.90)},
    {value: 85, multiplier: Math.abs(this.oneRepMax * 0.85)},
    {value: 80, multiplier: Math.abs(this.oneRepMax * 0.80)},
    {value: 75, multiplier: Math.abs(this.oneRepMax * 0.75)},
    {value: 70, multiplier: Math.abs(this.oneRepMax * 0.70)},
    {value: 65, multiplier: Math.abs(this.oneRepMax * 0.65)},
    {value: 60, multiplier: Math.abs(this.oneRepMax * 0.60)},
    {value: 55, multiplier: Math.abs(this.oneRepMax * 0.55)},
    {value: 50, multiplier: Math.abs(this.oneRepMax * 0.50)}
];

checkUpDown(value: number){
  if(this.roundUp == true){
      return this.closestRoundUp(value);
  }
  else{
      return this.closestRoundDown(value);
  }
}

closestRoundUp(value: number){
  this.rounded = value;
  while(this.rounded % 5 != 0){
    this.rounded += 1;
  }
  var x = document.getElementById("round");

  if(x.style.display == "none"){
    x.style.display = "inline";
  }
  return this.rounded;
}

closestRoundDown(value: number){
  this.rounded = value;

  while(this.rounded % 5 != 0){
    this.rounded -= 1;
  }

  var x = document.getElementById("round");

  if(x.style.display == "none"){
    x.style.display = "inline";
  }

  return this.rounded;
}
}