import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-weight-finder-results',
  templateUrl: './weight-finder-results.page.html',
  styleUrls: ['./weight-finder-results.page.scss'],
})
export class WeightFinderResultsPage implements OnInit {
  userWeight: number = 0;
  barWeight: number = 0;
  totalWeight: number = 0;
  weight: {};
  

  constructor(private router: Router, private route: ActivatedRoute, public navCtrl: NavController) { 
    
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){

        this.userWeight = this.router.getCurrentNavigation().extras.state.userWeight;
        this.barWeight = this.router.getCurrentNavigation().extras.state.barWeight;
        
        this.setTotalWeight(this.userWeight, this.barWeight);
        this.createWeightArray();

        //console.log(this.userWeight + this.barWeight);
        console.log(this.totalWeight);
      }
    });
  }

  ngOnInit() {
    
  }

  setTotalWeight(value: number, value2: number){


    this.totalWeight = value - value2;
    
    
    console.log("Total Weight = " + this.totalWeight + " User Weight: " + this.userWeight + " Bar Weight: " + this.barWeight);
    
  }

  createWeightArray(){
  this.weight = [
    {load: 45, amount: this.get45(this.totalWeight)},
    {load: 35, amount: this.get35(this.totalWeight)},
    {load: 25, amount: this.get25(this.totalWeight)}, 
    {load: 10, amount: this.get10(this.totalWeight)},
    {load: 5,  amount: this.get5(this.totalWeight)},
    {load: 2.5, amount: this.get2p5(this.totalWeight)}
  ];
}

  //reason for everything returning 0 is because all methods below are read before totalWeight is set
  get45(value: number): number{ //returns value for 45, but not any others, make sure to check else statements
    var plate: number = 45;
    var total: number;

    if(value <= plate || value == 0){
      total = 0; 
    }
    else{
      total = Math.floor(value / plate);
      while(total%2 != 0){
        total -= 1;
      }
    }
    this.totalWeight -= (45*total);
    console.log(total);
    return total/2;
  }

  get35(value: number): number{
    var plate: number = 35;
    var total: number;
    if(value <= plate || value == 0){
      total = 0;
    }
    else{
      total = Math.floor(value / plate);
      while(total%2 != 0){
        total -= 1;
      }
    }
    this.totalWeight -= (35*total);
    console.log(total);
    return total/2;
  }

  get25(value: number): number{ //value gets to here then stops
    var plate: number = 25;
    var total: number;
    if(value <= plate || value == 0){
      total = 0;
    }
    else{
      total = Math.floor(value / plate);
      while(total%2 != 0){
        total -= 1;
      }
    }
    this.totalWeight -= (25*total);
    console.log(total);
    return total/2;
  }

  get10(value: number): number{
    var plate: number = 10;
    var total: number;
    if(value <= plate || value == 0){
      total = 0;
    }
    else{
      total = Math.floor(value / plate);
      while(total%2 != 0){
        total -= 1;
      }
    }
    this.totalWeight -= (10*total);
    console.log(total);
    return total/2;
  }

  get5(totalWeight: number){
    var plate: number = 5;
    var total: number;
    if(totalWeight <= plate || totalWeight == 0){
      total = 0;
    }
    else{
      total = Math.floor(totalWeight / plate);
      while(total%2 != 0){
        total -= 1;
      }
    }
    this.totalWeight -= (5*total);
    console.log(total);
    return total/2;
  }

  get2p5(totalWeight: number): number{
    var plate: number = 2.5;
    var total: number;
    if(totalWeight <= plate || totalWeight == 0){
      total = 0;
    }
    else{
      total = Math.floor(totalWeight / plate);
      while(total%2 != 0){
        total -= 1;
      }
    }
    this.totalWeight -= (2.5*total);
    console.log(total);
    return total/2;
  }

 


  back(){
    this.navCtrl.navigateBack(['/tabs']);
  }

  

}



