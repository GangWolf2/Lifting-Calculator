import { Component, OnInit } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';
import { WeightFinderResultsPage} from '../weight-finder-results/weight-finder-results.page';

@Component({
  selector: 'app-weight-finder',
  templateUrl: './weight-finder.page.html',
  styleUrls: ['./weight-finder.page.scss'],
})
export class WeightFinderPage implements OnInit {

  userWeight: number;
  bar;
  constructor(public navCtrl: NavController, public navParams: NavParams) { 
    this.userWeight = this.navParams.get("userWeight"); //used to set weight if this page is navigated from another page
  }

  setUserWeight(userWeight){//used if starting on this page, or changing input after being navigated to this page
    this.userWeight = userWeight;
  }

  ngOnInit() {
  }

  bartype = [
    {name: 'Olympic Bar', weight: 45, img: "https://imgur.com/CdaOvGq.png", isChecked: true},
    {name: 'Training Bar', weight: 15, img: "https://imgur.com/zZJdsOI.png",isChecked: false},
    {name: 'Hex/Trap Bar', weight: 45, img: "https://imgur.com/vA77495.png", isChecked: false},
    {name: 'Yoke Bar', weight: 65, img: "https://imgur.com/HPupOjv.png", isChecked: false},
    {name: 'Swiss Bar', weight: 35, img: "https://imgur.com/2RgEPaO.png", isChecked: false}
  ];

  private barTypeHolder = [
    {name: 'Holder', weight: 0, img:"https://imgur.com/2RgEPaO.png", isChecked: false}
  ];

  setBarsFalse(bar){
    this.bartype[bar].isChecked = true;

    this.barTypeHolder[0] = this.bartype[bar];
    this.bartype[bar] = this.bartype[0];
    this.bartype[0] = this.barTypeHolder[0];

    for(var i = 1; i < this.bartype.length; i++){
      this.bartype[i].isChecked = false;
    }

    this.bar = this.bartype[bar].weight;
  }

  loadWeightFinderResultsPage(){
    this.navCtrl.navigateForward(['./weight-finder-results', {
      userWeight: this.userWeight,
      bar: this.bar
    }]);
  }


  
}
