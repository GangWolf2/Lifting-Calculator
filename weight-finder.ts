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



export class WeightFinderPage {
  
  protected userWeight: number;
  protected bar;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userWeight = this.navParams.get("userWeight");
  }

  

  protected bartype = [
    {name: 'Olympic Bar', weight: 45, img: "https://imgur.com/CdaOvGq.png", isChecked: true},
    {name: 'Training Bar', weight: 15, img: "https://imgur.com/zZJdsOI.png",isChecked: false},
    {name: 'Hex/Trap Bar', weight: 45, img: "https://imgur.com/vA77495.png", isChecked: false},
    {name: 'Yoke Bar', weight: 65, img: "https://imgur.com/HPupOjv.png", isChecked: false},
    {name: 'Swiss Bar', weight: 35, img: "https://imgur.com/2RgEPaO.png", isChecked: false}
  ];

  private barTypeHolder = [
    {name: 'Holder', weight: 0, img:"https://imgur.com/2RgEPaO.png", isChecked: false}
  ];

  
  setBar(bar){
    this.bar = bar;
  }

  setBarsFalse(bar){ //idea is that html will check which if a bar is true, send that bar to this method
    this.bartype[bar].isChecked = true; //now must move this bar to top of array

    this.barTypeHolder[0] = this.bartype[bar];
    this.bartype[bar] = this.bartype[0];
    this.bartype[0] = this.barTypeHolder[0];

    for(var i = 1; i < this.bartype.length; i++){
      this.bartype[i].isChecked = false;
    }
    //and this method will go through bar array and set all other bars false
                      //based on most current checkbox marked true, but will also send selected 
                      //checkbox to the front of the array
   
  }
  
  boxDisable(bar){
    this.bartype[bar].isChecked = false;
  }

  boxEnable(bar){
    this.bartype[bar].isChecked = true;
  }

  setUserWeight(userWeight){
    
    this.userWeight = userWeight;

  }

  loadResultsPage(){
    this.navCtrl.push(ResultsPage, {
      userWeight: this.userWeight,
      barWeight: this.bar.weight
    });

  

}
