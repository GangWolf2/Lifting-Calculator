import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MaxPercentagesPage } from '../max-percentages/max-percentages'; 


@IonicPage()
@Component({
    selector: 'page-maxpercentages-results'
    templateURL: 'maxpercentages-results.html'
})

export class MaxPercentagesResultsPage{
    oneRepMax: number;
    roundUp: boolean = true;
    constructor(public navCtrl: NavController, public navParams: NavParams){
        this.oneRepMax = this.navParams.get("oneRepMax")
    }

    //would ideally like to only make one array, might need two
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

    /*since not all percentage numbers will equal an amount of weight that you can put on a bar
      the following two methods are intended to either round up or round down a number, depending
      on a setting chosen by the user. To determine which one to use here, would need to pass some type
      type of boolean before hand, and when that is passed to this page will determine which of these
      two to run. Works by checking if a given this.percentages.multiplier %(mod) 5 = 0;
      while it isnt to 0, should increase or decrease weight by 1 pound until it = 0;
      checks by mod 5 because all valid weight amounts are equally divisible by 5, idea similar
      in results.ts   
    */
    closestRoundUp(value: number){//cannot begin work until setting page is created, boolean var needed to check if this should run
        while(value % 5 != 0){
            value += 1;
        }   
        return value;
        /*while(this.percentages[value].multiplier % 5 != 0){
                this.percentages[value].multiplier += 1;
            }
            return this.percentages[value].multiplier;
            */
        }

    closestRoundDown(value: number){//cannot being work until setting page is created, boolean var needed to check if this should run
        while(value % 5 != 0){
            value -= 1;
        }   
        return value;
        /*while(this.percentages[value].multiplier % 5 != 0){
            this.percentages[value].multiplier -= 1;
        }
        return this.percentages[value].multiplier; */
    }

    goBack(){
        this.navCtrl.pop();
    }
}
