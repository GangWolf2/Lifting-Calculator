import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    var imperialPlates:number[];
    imperialPlates = [45, 35, 25, 10, 5, 2.5];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

  calculatePlatesImp(userWeight){


  }

}
