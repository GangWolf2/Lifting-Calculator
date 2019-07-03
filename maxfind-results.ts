import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MaxFindResultsPage } from '../maxfind-results/maxfind-results'; 
import { MaxFindPage } from '../max-find/max-find';

@IonicPage()
@Component({
    selector: 'page-maxfind-results'
    templateURL: 'maxfind-results.html'
})

export class MaxFindResultsPage{
    weight: number;
    reps: number;

    constructor(public navCtrl: NavController, public navParams: NavParams){
        this.weight = this.navParams.get("weight");
        this.reps = this.navParams.get("reps");    
    }

    maxPercentages: number[] = [0,1,1.05,1.08,1.11,1.15,1.18,1.2,1.25,1.3,1.33,1.36,1.42];

    calculateMax(){
        
    }




}