import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MaxPercentagesPage } from '../max-percentages/max-percentages';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaxFindPage');
  }

 
  
}
